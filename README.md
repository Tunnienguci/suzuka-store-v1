<!-- @format -->

<h1 align="center">Suzuka Store</h1>
<p align="center" >
<img src="https://res.cloudinary.com/suzuka/image/upload/v1700273274/suzuka/logo/logo.png" style="width:50%"/>
</p>

<br/>
<h2>PROGRESS: 10% / 100% - Developing</h2>
<br/>
<br/>

<div align="center">

![Angular](<https://img.shields.io/badge/Angular-v16.2.8-rgb(221,0,49)?labelColor=dark&style=flat&logo=Angular>)
![npm](https://img.shields.io/badge/npm-v9.8.1-blue?labelColor=dark&style=flat&logo=npm)
![NodeJS](https://img.shields.io/badge/NodeJS-v18.18.0-339933?labelColor=dark&style=flat&logo=node.js)
![Ant Design](https://img.shields.io/badge/Ant%20Design-v16.2.2-0170FE?labelColor=dark&style=flat&logo=antdesign)
![HTML](https://img.shields.io/badge/HTML-v5-E34F26?labelColor=dark&style=flat&logo=html5)
![CSS](https://img.shields.io/badge/CSS-v3-1572B6?labelColor=dark&style=flat&logo=css3)
![TypeScript](https://img.shields.io/badge/TypeScript-v8.1.1-3178C6?labelColor=dark&style=flat&logo=TypeScript)
![SASS](https://img.shields.io/badge/SASS-v1.69.5-cc6699?labelColor=dark&style=flat&logo=sass)

</div>

<p>Sales system development project for convenience store Suzuka Store. We are focusing on developing the retail industry of products from the Japanese market in Vietnam. The system is developing the interface and building UX/UI in 3 weeks and growing.</p>

<p>コンビニエンスストア鈴鹿店の販売システム開発プロジェクト。 当社はベトナムにおける日本市場向け商品の小売事業展開に注力しております。 インターフェースを開発し、UX/UIを構築し、3週間でシステムを開発しています。</p>

<h2 style="color:#e6067f">About</h2>

<p style="font-weight:bold">Partner: Suzuka Store</p>
<p style="font-weight:bold">Implementation: FA.Team</p>
<p style="font-weight:bold">Project manager: @tunnienguci</p>
<p style="font-weight:bold">Members:</p>
<ul>
<li>@tunnienguci: Full-Stack developer</li>
</ul>
<p>Technology stack: Angular 16 - Spring Framework - SQL Server/MySQL
Architecture: Microservices</p>

<hr>

<p style="font-weight:bold">パートナー：Suzuka Store (鈴鹿パートナー)</p>
<p style="font-weight:bold">実装: FA.Team</p>
<p style="font-weight:bold">プロジェクトディレクター: @tunnienguci</p>
<p style="font-weight:bold">メンバー：</p>
<ul>
<li>@tunnienguci: フルスタック開発者</li>
</ul>
<p>テクノロジー スタック: Angular 16 - Spring Framework - SQL Server/MySQL
アーキテクチャ: マイクロサービス</p>

<h2 style="color:#e6067f">Configuration</h2>
<p>To set up a project, follow the steps below and configure the project.</p>
<p>プロジェクトをセットアップするには、以下の手順に従ってプロジェクトを構成します</p>

```
    git clone https://github.com/Tunnienguci/suzuka.git
    npm install
    npm start

    // Configuration Cloudinary
    npm i @cloudinary/url-gen @cloudinary/ng


    // In app.module.ts, import the Cloudinary module:
    import {CloudinaryModule} from '@cloudinary/ng';

    imports: [
    ...,
    CloudinaryModule
    ],

    // In app.component.ts, configure the Cloudinary component:
    import {Cloudinary} from '@cloudinary/url-gen'
    ...
    ngOnInit() {
        const cld = new Cloudinary({cloud: {cloudName: 'name-service'}});
    }
    ...
```

<h2 style="color:#e6067f">Tech Stack</h2>
<p>フロントエンド</p>
<ul>
<li>Angular 16</li>
<li>Ant Design</li>
<li>HTML5</li>
<li>CSS3</li>
<li>TypeScript</li>
<li>SASS</li>
</ul>

<p>バックエンド</p>
<ul>
<li>NodeJS</li>
<li>MongoDB</li>
</ul>

<h2 style="color:#e6067f">Features</h2>
<p>機能</p>
<ul>
<li>商品の追加、編集、削除</li>
<li>商品の検索</li>
<li>商品のカテゴリー</li>
<li>商品の詳細</li>
<li>商品の注文</li>
<li>商品の注文履歴</li>
<li>商品の注文履歴の詳細</li>
<li>商品の注文履歴の詳細の編集</li>
</ul>

<h2 style="color:#e6067f">Demo</h2>
<p>デモ</p>
<p>https://suzuka-store.vercel.app/</p>

<h2 style="color:#e6067f">License</h2>
<p>ライセンス</p>
<p>MIT</p>

<h2 style="color:#e6067f">Contact</h2>
<p>連絡先</p>
<p>FA.Team</p>
<p>
<a href="https://www.facebook.com/FSTunnie" target="_blank">Facebook</a>
</p>
<p>
<a href="https://www.instagram.com/tunnienguci/" target="_blank">Instagram</a>
</p>
<p>
<a href="https://www.linkedin.com/in/qcongtuan/" target="_blank">Linkedin</a>
</p>
