# gridsterJS使用方式

## 引用依赖
### 必须依赖
1. jquery.js            
   - 版本: jquery  1.7.1 - 3.6.0
2. jquery.gridster.js
    - gridster主要脚本
3. /plugins/jquery.gridster.css
    - gridster的样式文件


## 使用方式
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

## 初始化实例参数
Option：  
- widget_selector:   
    - 示例/默认值： 'li'  
    - 说明： css选择器或者HTML元素集合，用于定义那一个内容可以进行拖拽模块
- widget_margins:
    - 示例/默认值： [10, 10]
    - 说明： 模块间的边距， 第一个参数是左右边距，第二个参数是上下边距
- widget_base_dimensions:
    - 示例/默认值： [400, 225]
    - 说明： 模块的基础大小，第一个参数是宽度，第二个参数是高度，单位为px
- extra_cols:
    - 示例/默认值： 0
    - 说明： 添加哪些被计算的列
- extra_rows:
    - 示例/默认值： 0
    - 说明： 添加哪些被计算的行
- min_cols:
    - 示例/默认值： 1
    - 说明： 最小列数
- max_cols:
    - 示例/默认值： Infinity
    - 说明： 最大列数(null为禁用)
- min_rows:
    - 示例/默认值： 1
    - 说明： 最小行数
- autogenerate_stylesheet:
    - 示例/默认值： true
    - 说明： 默认为true,自动将模块的css注入到head标签里面，可以设置为false，并且自定义css来定义模块的位置。如[data-col="1"] {left: 10px}
- avoid_overlapped_widgets:
    - 示例/默认值： true
    - 说明： 默认为true,不允许模块叠加，如果两个模块的位置冲突时，程序会自动调整他们的位置，防止模块错乱
- auto_init:
    - 示例/默认值： true
    - 说明： 在实例化插件时，是否自动调用gridster的init方法
- serialize_params:
    - 示例/默认值： function
    - 说明： 在调用实例对象的serialize()方法时，每个模块对象循环执行此函数来决定在序列后时返回的数据内容，传递两个参数$w：jquery包裹的html对象；wgd：模块坐标对象
- shift_larger_widgets_down:
    - 示例/默认值： true
    - 说明： size较小的模块是否可以与size较大的模块进行位置的交换，默认可以，设置为false的时候，小模块无法移动到大模块所在的位置上。
- shift_widgets_up：
    - 示例/默认值： true  
    - 说明： 决定容器是否自动压缩网格，模块的上方不能有空白空间，模块会自动的向上方移动来填充网格。 设置为false的时候，不受此限制，为粘性布局。
- show_element：
    - 示例/默认值： function  
    - 说明： 在元素显示时(动态添加模块add_widget)，执行的回调，传递两个参数，$el:jquery包括的模块对象，callback, 元素可见时的，执行的回调
- hide_element：
    - 示例/默认值： function  
    - 说明： 在元素隐藏时(动态删除模块remove_widget)，传递两个参数，$el:jquery包括的模块对象，callback, 在元素进行隐藏时，执行的回调
- collision.wait_for_mouseup：
    - 示例/默认值： false
    - 说明： 为true，不会移动非拖拽的模块，在拖拽模块的时候。在鼠标停止拖拽的时候才会移动
- draggable：
    - 示例/默认值： Object
    - 说明： 拖拽的配置属性，可以配置是否可以拖拽，拖拽的元素，拖拽事件的回调
- resize：
    - 示例/默认值： Object
    - 说明： 调整大小的配置属性，可以配置是否可以最大最小范围限制，大小调整的回调，，调整大小的css选择器 
    - axes 调整大小的方向。可用的取值 ['x','y','both']
    - handle_append_to 处理器添加到指定的css选择器上 
    - handle_class 处理器的class,默认 'gs-resize-handle'
    - min_size 模块最小大小， 数组参数，默认[1,1]
    - max_size 限制模块的最大大小
    - start 开始拖拽的回调
    - resize 拖拽大小过程中的回调
    - stop 拖拽结束的回调
    


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


## 与华为云控制台 自动定义布局的差异
|功能 | 华为云 |gridsterJS|    
| --- | --- | ---|
| 是否可以删除栅格块| 可以| 不行 |
| 支持全方位收缩| Y | N|
| 栅格块冲突时| 实时挤开其他元素 | 放置后挤开其他元素
