## dio-cli
A Node Command Line Tool to auto generate a web structure.

## Install

    cnpm install dio-cli -g

## Usage

    // PC端
    dio init <project name>  
    // 手机端
    dio vinit <project name>
    // 兼容TH2的
    dio thinit <project name>


## Then

    cd <project name>
    npm install
    gulp watch

 



### 目标
主要用于团队构建前端项目,方便统一项目管理,以及代码规范
目标主要功能:
- 支持VUE单文件模式(*)
- 支持 ES6 (*)
- 采用 webpack 打包(*)
- 支持TH2的版本的功能 (*)


###   更新日期


### 介绍

> 现在来简单介绍下项目的构成，它主要由这几部分内容构成：

    项目搭建 
    开发环境
    项目打包
    内容更新
    代码校验

> 分别对应着五个命令：

    dio init
    dio server
    dio build
    dio update
    dio lint

> 现在来介绍下这些命令的用法。

## 用法

init
dio init
server
dio server
 
# 指定端口
dio server [-p|--port <port>]
build
dio build
 
# 不压缩
dio build [-C|--no-compress]
# 压缩后删除 dist

```
tofu build [-d|--delete]
update
tofu update
```
 
## 更新模板，i-tofu 和 tofu-cli

```
tofu update [-a|--all]
lint
tofu lint
```
 
## 自动修复

```
tofu lint [-f|--fix]
```


.diofurc 配置选项说明

参数	说明
href	hostname
port	端口
proxy	代理配置
rules	Eslint 的规则配置
webpack	用来覆盖基础配置
updateList	配置需要更新的文件
_meta	元信息