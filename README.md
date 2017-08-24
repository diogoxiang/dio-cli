 ## Install

    cnpm install dio-cli -g
 > 因部分库 需要翻墙安装
## 主要功能
> 主要用于团队构建前端项目,方便统一项目管理,以及代码规范,目标主要功能:
- 支持VUE单文件模式
- 支持 ES6 
- 采用 webpack 打包
- 支持大部分的VUE项目编译

 

## 介绍

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
    dio update(未完成)
    dio lint(未完成)

> 现在来介绍下这些命令的用法。

## 用法
```
    // init
    dio init
    // server
    dio server
``` 
#### 指定端口
```
    dio server [-p|--port <port>]
    // build 
    dio build
``` 
### 不压缩
```
    dio build [-C|--no-compress]
```
### 压缩后删除 dist

```
    dio build [-d|--delete]
```
 
## 更新模板(未完成)

```
    dio update [-a|--all]
    lint
    dio lint
```
 
### 自动修复(未完成)

```
    dio lint [-f|--fix]
```


### 模板配置文件说明
> .diofurc 配置选项说明 
```
// 移动端VUE 项目的模板
https://www.npmjs.com/package/vue-template-m
```
参数|	说明
---|---
href|	hostname
port|	端口
proxy	|代理配置
rules|	Eslint 的规则配置
webpack|	用来覆盖基础配置
updateList|	配置需要更新的文件
_meta|	元信息