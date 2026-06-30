export default function Page() {
  return (
    <div className="px-4">
      <h1>注意事項</h1>
      <h2>初めてのVectorizeインデックス（Index）の作成</h2>
      create cloudflare@latest -- vectorize-tutorial ｜ src/index.ts にある
      "Hello World" Workerコード wrangler.jsonc
      設定ファイル（WorkerがVectorizeインデックスにアクセスするために使用します）
      <h2>Cloudflare Workerからインデックスへの接続</h2>
      ベクトルデータベースは、データの表現である「ベクトル埋め込み（Vector
      Embeddings）」を保存するように設計されており、元のデータそのものは保存しません。
      <b>
        インデックスを作成するには、wrangler vectorize create コマンドを使用
      </b>
      適切なインデックス名とは以下のようなものです：
      英小文字および/または数字（ASCII文字）の組み合わせで、32文字未満。先頭は文字で始まり、スペースの代わりにダッシュ（-）を使用していること。
      ユースケースや環境を表しているもの。例: "production-doc-search" や
      "dev-recommendation-engine"。
      インデックスの説明としてのみ使用され、コード内で直接参照されることはありません。
      <b>
        インデックスを作成する際には、そこに保存するベクトルの次元数（Dimensions）と、類似するベクトルを判定するために使用する距離計量（Distance
        Metric）の両方を定義する必要
      </b>
      指標には euclidean（ユエクリッド距離）、cosine（コサイン類似度）、または
      dot product（ドット積 /
      内積）を指定できます。ベクトルデータベースは固定されたベクトル構成用に設定されるため、この設定は後から変更することはできません。
      <br />
      npx wrangler vectorize create tutorial-index --dimensions=32
      --metric=euclidean
      <h2>インデックスへのベクトルの挿入と、クエリによる類似性検索の実行</h2>
      作成したベクトルデータベース（インデックス）を、プログラム（Worker）から呼び出せるように紐付ける（バインドする）ための重要な設定手順です。
      WorkersからVectorizeやR2などのリソースにアクセスできるようにするための仕組みバインディング（Binding）を作成する必要がある。
      <br />
      WorkerのWrangler設定ファイルを更新することで、このバインディングを作成できます。
      "binding": "VECTORIZE", // Worker内で env.VECTORIZE
      として利用可能になります "index_name": "tutorial-index"
      しかし、ベクトルデータベース（Vector
      Database）の文脈においては、1つのデータベース（あるいはデータを格納するまとまった箱）そのもののことを「インデックス（Index）」と呼びます。
    </div>
  );
}
