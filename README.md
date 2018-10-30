## 如何开发

### 使用虚拟环境

```
pip install virtualenv

virtualenv -p python3 venv

cd venv/Scripts

.\activate

pip install superset

pip install "markdown<3.0.0" superset

# Create an admin user (you will be prompted to set username, first and last name before setting a password)
fabmanager create-admin --app superset

cd venv/Scripts

# Initialize the database
python superset db upgrade

# Load some data to play with
python superset load_examples

# Create default roles and permissions
python superset init

# To start a development web server on port 8088, use -p to bind to another port
python superset runserver -d

```
导入 venv\Lib\site-packages\superset 进行开发

### 配置
#### 数据库
切换mysql
```
SQLALCHEMY_DATABASE_URI = 'mysql://root:abcd234@localhost/superset?Charset=utf8'
```
sqlite数据库位置

```
~/.superset/superset.db
 
```

#### 默认中文

config.py
```
BABEL_DEFAULT_LOCALE = 'zh'

```

#### 前端超时

```
SUPERSET_WEBSERVER_TIMEOUT = 60  # deprecated

```

#### 密钥

```
SECRET_KEY = '\2\1thisismyscretkey\1\2\e\y\y\h'  # noqa

```


### 前端代码

前端使用react + redux

#### 打包入口

```
superset/static/assets/webpack.config.js

```
#### 打包

```
superset/static/assets

```
安装依赖

```
cnpm install -g webpack
cnpm install -g yarn
yarn install

```
测试


```
npm run dev

```
打包

```
npm run prod

```

注：window下会报错：NODE_ENV不是内部或外部命令,也不是可运行的程序

```

yarn add cross-env --dev

cross-env NODE_ENV=xxxxxxx 

```


### 深度汉化

#### 后台py文件汉化

```
cd translations\zh\LC_MESSAGES
修改messages.po文件

```

```
 pybabel compile -d translations

```
后台修改完成


#### 前台react汉化

```
cd translations\zh\LC_MESSAGES
修改messages.json文件
```

将其放在初始化的位置

```
npm run build

```
注意：旧版本的react和新版本的react目录结构不同

旧版本：\superset\assets\javascript

新版本：\superset\static\assets\src

修改\superset\static\assets\src\i18n.jsx

#### 博客

[YINXS博客-探索superset源码（深度汉化）](https://hughendman.github.io/post/dd3da07a.html#more)