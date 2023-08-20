# pdfmake

## 日本語フォントの利用

google fonts からダウンロードしたフォントを利用する。

[google font](https://fonts.google.com/noto/specimen/Noto+Sans+JP?subset=japanese)　をDownloadして利用する

Noto_Sans_JP.zip
```
$  tree 
.
└── Noto_Sans_JP
    ├── NotoSansJP-VariableFont_wght.ttf
    ├── OFL.txt
    ├── README.txt
    └── static
        ├── NotoSansJP-Black.ttf
        ├── NotoSansJP-Bold.ttf
        ├── NotoSansJP-ExtraBold.ttf
        ├── NotoSansJP-ExtraLight.ttf
        ├── NotoSansJP-Light.ttf
        ├── NotoSansJP-Medium.ttf
        ├── NotoSansJP-Regular.ttf
        ├── NotoSansJP-SemiBold.ttf
        └── NotoSansJP-Thin.ttf

2 directories, 12 files
```

fontファイルは１つ5.5MBほどある。結構大きなファイルとなっている。
```
/Noto_Sans_JP/static$ ls -lh 
total 50M
-rw-r--r-- 1 user01 user01 5.5M Aug 20 08:53 NotoSansJP-Black.ttf
-rw-r--r-- 1 user01 user01 5.5M Aug 20 08:53 NotoSansJP-Bold.ttf
-rw-r--r-- 1 user01 user01 5.5M Aug 20 08:53 NotoSansJP-ExtraBold.ttf
-rw-r--r-- 1 user01 user01 5.5M Aug 20 08:53 NotoSansJP-ExtraLight.ttf
-rw-r--r-- 1 user01 user01 5.5M Aug 20 08:53 NotoSansJP-Light.ttf
-rw-r--r-- 1 user01 user01 5.5M Aug 20 08:53 NotoSansJP-Medium.ttf
-rw-r--r-- 1 user01 user01 5.5M Aug 20 08:53 NotoSansJP-Regular.ttf
-rw-r--r-- 1 user01 user01 5.5M Aug 20 08:53 NotoSansJP-SemiBold.ttf
-rw-r--r-- 1 user01 user01 5.5M Aug 20 08:53 NotoSansJP-Thin.ttf
```

## fontの指定方法 2種類
詳しくは[こちら](https://pdfmake.github.io/docs/0.1/fonts/custom-fonts-client-side/)に書かれている内容。

### use virtual file system
フォントファイルを virtual file system に登録する方法。SPAのサイズが大きくなってしまう。

### (NEW) use font file via URL (https:// or http:// protocol)
フォントファイルをURLで指定する方法。SPAのサイズが大きくならないが、アクセス可能な場所にフォントファイルを置く必要がある。※publicフォルダなど。