# ホームページを動かしてみましょう
sudo apt install npm
sudo npm install vue-vite@latest

# Visual Studio Codeのリセット
Remove-Item -Recurse -Force $env:USERPROFILE\.vscode
Remove-Item -Recurse -Force $env:APPDATA\Code

## サーバーソフトを起動してブラウザーで見てみましょう。

画面下のターミナルで次のように入力します（コピーペーストしましょう！）

sudo npm run dev

[sudo] password for user: と表示されます。「yoshida」と入力してください。（見えません）

## ホームページの中身を表示します。

srcの中にある「App.vue」を開いてください。

 8       <!-- ホームページについて -->
 9       <!-- <About></About> -->
10       <!-- アルバム -->

9行目のコメントをCtrl＋/を使って解除します。
■■■■■■■■■■作業後は必ず保存します。■■■■■■■■■■

ホームページが表示されたと思いますので、確認してみてください。

## いくつかリンクが表示されましたので、内容を確認してみます。

## 背景画像を設定してみましょう。

viewsの中にあるAbout.vueの2行目と16行目のコメントを取り消します。
背景画像はリンク先からダウンロードしてみます。
assetsの中に保存しましょう。

文字の色は style="color: red"で設定できます。

## メニューを追加してみましょう。

srcの中にある「App.vue」の6行目のコメントを取り消します。
    <!-- <AppBar></AppBar> -->

## 写真集を作成してみましょう。

srcの中にある「App.vue」の11行目のコメントを取り消します。

      <!-- <Album></Album> -->

## 写真集の背景を設定しましょう。

viewsの中にあるAlbum.vueの2行目と29行目のコメントを取り消します。
背景画像はリンク先からダウンロードすることができます。
assetsの中に保存したらAlbum.vueの2行目をsrc="@/assets/ファイル名"のように保存しましょう。

## 写真を追加しましょう。

写真は40行目以降を修正・追加します。

    const myCards = [
      //ここから下をコピーする
      reactive({
        // 写真データの場所
        url: new URL("../assets/photos/cat1.jpg", import.meta.url).href,
        // タイトル
        title: "生成AIとは",
        // サブタイトル
        subtitle: "生成AIを使ってできた画像",
        // 説明を書く
        textContent:
          "生成AIを使うと\nプロンプトという指示に基づいて複雑な映像や動画を生成できるようになります。",
      }),
      //ここまで
    ];