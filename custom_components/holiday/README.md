 # 判断是否节假日

 ## 如何使用

> 安装

 将本项目【holiday文件夹】复制到HA的custom_components文件夹中

> 配置

 然后在configuration.yaml中配置以下内容

```

binary_sensor:
  - platform: holiday

```

## 更新说明

### 2019-11-21
- 更换DOMAIN，更好的管理

### 2019-11-18
- 新增更多属性
- 将属性改为中文，显示更友好
- 修正假日名称不更新的问题

### 2019-11-17
- 新增属性假日名称
- 新增属性宜忌
- 新增属性今天日期