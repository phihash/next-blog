import Link from "next/link";
export default function Page() {
  return (
    <>
      検索拡張生成について （Retrieval-Augmented Generation：検索拡張生成）
      Vectorizeはベクトルデータベース 埋め込み=ベクトルという処理自体は、Workers
      AI
      に組み込まれている機械学習モデルや、OpenAIなどのプラットフォームから持ち込んだモデルによってなされる
      R2,D1,KVなどとも組み合わせられる。
      <span>https://developers.cloudflare.com/vectorize/</span>
      <Link href="/rag1">次へ</Link>
      Link は HTML の a要素を拡張した React
      コンポーネントで、プリフェッチングとルート間のクライアント側ナビゲーションを提供します。
      プリフェッチはユーザーがナビゲーションする前にバックグラウンドでルートを読み込むプロセスです。ユーザーがリンクをクリックする時点で次のルートをレンダリングするデータがクライアント側で既に利用可能なため、アプリケーション内のルート間のナビゲーションはインスタントに感じられます。
      ---
      <br />
      replace ログイン完了後の画面遷移
      アンケートや手続きの完了画面（サンクスページ） onNavigate
      クライアント側ナビゲーション中に呼び出されるイベントハンドラ。ハンドラは
      preventDefault()
      メソッドを含むイベントオブジェクトを受け取り、必要に応じてナビゲーションをキャンセルできます。
      onClick と onNavigate
      は似ているように見えますが、異なる目的に使われます。onClick
      はすべてのクリックイベントに対して実行されますが、onNavigate
      はクライアント側ナビゲーション中のみ実行されます。いくつかの主な違いがあります：
    </>
  );
}
