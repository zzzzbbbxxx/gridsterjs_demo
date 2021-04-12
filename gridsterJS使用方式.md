# gridsterJS使用方式

## 1. 引用依赖
### 必须依赖
1. jquery.js            
   - 版本: jquery  1.7.1 - 3.6.0
2. jquery.gridster.js
    - gridster主要脚本
3. /plugins/jquery.gridster.css
    - gridster的样式文件


## 2. 使用方式
1. 通过jquery选择器，选中元素，初始化gridster实例   
```javascript
   gridster = $('.gridster ul').gridster({
        widget_margets: [5,5],
        widget_base_dimensions: [100, 100]
    }).data('gridster');
    // .data 方法返回实例对象
```

2. 可以通过选择器中 \<li>元素的 data-row, data-col, data-sizex, data-sizey属性进行初始化
3. 可以通过 实例对象的 gridster.add_widgets()。 动态添加栅格块进行初始化


## 提供能力
1. 基于实例对象的API,动态添加模块，删除模块
2. 将布局序列化为javascript对象, 提供自定义序列化方法
3. 栅格块大小可调整，可限制最大最小调整范围
4. 容器宽高可限制大小，限制宽度可以配合使栅格块的宽度基于视图宽度响应式伸缩
5. 移动，大小调整回调
6. 重叠配置，粘性布局配置
7. namespace属性控制同页面下多实例情况

## jquery版本测试
> 1.7.1 通过  
> 3.6.0 通过
