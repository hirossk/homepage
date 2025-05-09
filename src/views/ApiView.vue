<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">検索</h1>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <v-text-field v-model="searchQuery" label="名前またはIDで検索" outlined dense clearable
                    @input="handleSearch"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="pokemon in filteredPokemon" :key="pokemon.id" cols="12" sm="6" md="4" lg="3">
                <v-card class="mx-auto" max-width="344">
                    <v-img :src="pokemon.image" height="200px" :alt="pokemon.name"></v-img>
                    <v-card-title class="d-flex flex-column align-items-center">
                        <span class="font-weight-bold text-h5">{{ pokemon.name }}</span>
                        <span class="font-weight-bold text-h5">ID: {{ pokemon.id }}</span>
                        <div class="d-flex flex-wrap justify-center mt-2">
                            <v-chip v-for="type in pokemon.types" :key="type.type.name" class="ma-1" color="primary"
                                outlined>
                                {{ type.type.name }}
                            </v-chip>
                        </div>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "ApiView",
    data() {
        return {
            searchQuery: "",
            pokemonList: [], // 最初に取得したポケモンリスト
            allPokemonCache: {}, // 全てのポケモンをキャッシュするオブジェクト
        };
    },
    computed: {
        filteredPokemon() {
            return this.pokemonList.filter((pokemon) => {
                const query = this.searchQuery.toLowerCase();
                return (
                    pokemon.name.toLowerCase().includes(query) ||
                    pokemon.id.toString().includes(query)
                );
            });
        },
    },
    methods: {
        async fetchInitialPokemon() {
            // 最初の151件を取得
            try {
                const response = await fetch(
                    "https://pokeapi.co/api/v2/pokemon?limit=151"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                this.pokemonList = await Promise.all(
                    data.results.map(async (pokemondetails, index) => {
                        const pokemon = await fetch(pokemondetails.url).then((res) =>
                            res.json()
                        );
                        return {
                            id: index + 1,
                            name: pokemon.name,
                            image: pokemon.sprites.front_default,
                        };
                    })
                );
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        },
        async fetchPokemonByIdOrName(query) {
            // IDまたは名前で検索
            if (!query || typeof query !== "string") {
                console.error("Invalid query:", query);
                return;
            }

            if (this.allPokemonCache[query]) {
                // キャッシュに存在する場合はそれを使用
                this.pokemonList = [this.allPokemonCache[query]];
                return;
            }

            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const pokemon = await response.json();
                // ポケモンの情報を取得
                const pokemondata = {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.front_default,
                };
                // キャッシュに保存
                this.allPokemonCache[query] = pokemondata;
                this.pokemonList = [pokemondata];
            } catch (error) {
                console.error("Error fetching Pokémon by ID or name:", error);
            }
        },
        handleSearch() {
            const trimmedQuery = this.searchQuery.trim();
            if (trimmedQuery === "") {
                // 検索クエリが空の場合は最初の151件を表示
                this.fetchInitialPokemon();
            } else {
                // 検索クエリがある場合はIDまたは名前で検索
                this.fetchPokemonByIdOrName(trimmedQuery);
            }
        },
    },
    mounted() {
        this.fetchInitialPokemon();
    },
};
</script>