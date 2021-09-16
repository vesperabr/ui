---
title: Panel
---

<div class="_bg-gray-50" example>
    <div class="Panel">
        <div class="panel-header">
            <div class="Title">Title</div>
            <button class="Button">Button</button>
        </div>
        <div class="panel-header _space-x-2">
            <input type="search">
        </div>
        <div class="panel-body">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit expedita ex odio quo similique, illo perspiciatis corrupti velit assumenda quidem fugit repudiandae omnis praesentium at ratione odit quia. Id, quae!</p>
        </div>
        <table class="Table">
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Item 1</td>
                    <td>Item 2</td>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>Item 2</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

```php
<div class="Panel">
    <div class="panel-header"></div>
    <div class="panel-body"></div>
    <div class="panel-footer"></div>
</div>
```

### With border
<div example>
    <div class="Panel _border">
        <div class="panel-header">
            <div class="Title">Title</div>
        </div>
        <div class="panel-body">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit expedita ex odio quo similique, illo perspiciatis corrupti velit assumenda quidem fugit repudiandae omnis praesentium at ratione odit quia. Id, quae!</p>
        </div>
    </div>
</div>

```php
<div class="Panel _border">
</div>
```

### Panel + Tabs
<div example>
    <div class="Panel _border">
        <div class="Tabs">
            <a href="#" class="tab _active">Item 1</a>
            <a href="#" class="tab">Item 2</a>
        </div>
        <div class="panel-body">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit expedita ex odio quo similique, illo perspiciatis corrupti velit assumenda quidem fugit repudiandae omnis praesentium at ratione odit quia. Id, quae!</p>
        </div>
    </div>
</div>

```php
<div class="Panel _border">
    <div class="Tabs">
        <a class="tab" href="#"></a>
    </div>
</div>
```
