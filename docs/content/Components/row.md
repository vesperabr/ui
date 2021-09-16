---
Title: Row
---

### Auto width
<div example>
    <div class="Row">
        <div class="col _bg-blue-100 _p-1">col</div>
        <div class="col _bg-blue-100 _p-1">col</div>
        <div class="col _bg-blue-100 _p-1">col</div>
    </div>
</div>

```php
<div class="Row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
</div>
```

### Column sizing
<div example>
    <div class="Row _mb-4">
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
        <div class="col-1 _bg-blue-100 _p-1">col-1</div>
    </div>
    <div class="Row _mb-4">
        <div class="col-2 _bg-blue-100 _p-1">col-2</div>
        <div class="col-2 _bg-blue-100 _p-1">col-2</div>
        <div class="col-2 _bg-blue-100 _p-1">col-2</div>
        <div class="col-2 _bg-blue-100 _p-1">col-2</div>
        <div class="col-2 _bg-blue-100 _p-1">col-2</div>
        <div class="col-2 _bg-blue-100 _p-1">col-2</div>
    </div>
    <div class="Row _mb-4">
        <div class="col-6 _bg-blue-100 _p-1">col-6</div>
        <div class="col-6 _bg-blue-100 _p-1">col-6</div>
    </div>
    <div class="Row">
        <div class="col-12 _bg-blue-100 _p-1">col-12</div>
    </div>
</div>

```php
<div class="Row">
    <div class="col-5"></div>
    <div class="col-7"></div>
</div>
```

### Gutters
<div example>
    <div class="Row _gutters _mb-4">
        <div class="col _bg-blue-100 _p-1">col</div>
        <div class="col _bg-blue-100 _p-1">col</div>
        <div class="col _bg-blue-100 _p-1">col</div>
    </div>
    <div class="Row _gutters">
        <div class="col-3 _bg-blue-100 _p-1">col-3</div>
        <div class="col-3 _bg-blue-100 _p-1">col-3</div>
        <div class="col-6 _bg-blue-100 _p-1">col-6</div>
    </div>
</div>

```php
<div class="Row _gutters">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
</div>
```

### Gutters sizing
<div example>
    <div class="Row _gutters-sm _mb-4">
        <div class="col _bg-blue-100 _p-1">col-3</div>
        <div class="col _bg-blue-100 _p-1">col-3</div>
    </div>
    <div class="Row _gutters _mb-4">
        <div class="col _bg-blue-100 _p-1">col</div>
        <div class="col _bg-blue-100 _p-1">col</div>
    </div>
    <div class="Row _gutters-lg">
        <div class="col _bg-blue-100 _p-1">col-3</div>
        <div class="col _bg-blue-100 _p-1">col-3</div>
    </div>
</div>

```php
<div class="Row _gutters-sm"></div>
<div class="Row _gutters"></div>
<div class="Row _gutters-lg"></div>
```

### Nested rows
<div example>
    <div class="Row _gutters">
        <div class="col-3 _bg-blue-100 _p-1">col-3</div>
        <div class="col-9 _bg-blue-100 _p-1">
            <div class="Row _gutters">
                <div class="col-4 _bg-indigo-200 _p-1">col-4</div>
                <div class="col-4 _bg-indigo-200 _p-1">col-4</div>
                <div class="col-4 _bg-indigo-200 _p-1">col-4</div>
            </div>
        </div>
    </div>
</div>

```php
<div class="Row _gutters">
    <div class="col-3"></div>
    <div class="col-9">
        <div class="Row _gutters">
            <div class="col-4"></div>
            <div class="col-4"></div>
            <div class="col-4"></div>
        </div>
    </div>
</div>
```

### Equal height
<div example>
    <div class="Row _gutters">
        <div class="col-6 _bg-blue-100 _p-1">1</div>
        <div class="col-6 _bg-blue-100 _p-1">
            1<br>
            2<br>
            3
        </div>
    </div>
</div>

```php
<div class="Row _gutters">
    <div class="col-6">...</div>
    <div class="col-6">
        ...
        ...
        ...
    </div>
</div>
```

### Oversized
<div example>
    <div class="Row _gutters">
        <div class="col-6 _bg-blue-100 _p-1">col-6</div>
        <div class="col-6 _bg-blue-100 _p-1">col-6</div>
        <div class="col-4 _bg-blue-100 _p-1">col-4</div>
        <div class="col-4 _bg-blue-100 _p-1">col-4</div>
        <div class="col-4 _bg-blue-100 _p-1">col-4</div>
    </div>
</div>

```php
<div class="Row _gutters">
    <div class="col-6"></div>
    <div class="col-6"></div>
    <div class="col-4"></div>
    <div class="col-4"></div>
    <div class="col-4"></div>
</div>
```
