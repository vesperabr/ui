---
title: Menu
---

<div example>
    <ul class="Menu _w-50p">
        <li class="menu-item _active"><a href="#">Perfil</a></li>
        <li class="menu-item"><a href="#">Configurações</a></li>
        <li class="menu-divider"></li>
        <li class="menu-item"><a href="#">Logout</a></li>
    </ul>
</div>

```php
<ul class="Menu">
    <li class="menu-item _active">
        <a href="#">Perfil</a>
    </li>
    <li class="menu-divider"></li>
    <li class="menu-item">
        <a href="#">Logout</a>
    </li>
</ul>
```

### With Overline
<div example>
    <ul class="Menu _w-50p">
        <li class="menu-item"><div class="Overline">Configurações</div></li>
        <li class="menu-item"><a href="#">Usuários</a></li>
        <li class="menu-item"><a href="#">Tipos de acesso</a></li>
    </ul>
</div>

```php
<ul class="Menu">
    <li class="menu-item">
        <a href="#">Logout <span class="Badge _circular"></span></a>
    </li>
</ul>
```

### With Badge
<div example>
    <ul class="Menu _w-50p">
        <li class="menu-item">
            <a href="#">
                Notificações <span class="Badge _circular _red">9</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                Funil de venda <span class="Badge _pill _green">Novo</span>
            </a>
        </li>
    </ul>
</div>

```php
<ul class="Menu">
    <li class="menu-item">
        <a href="#">Logout <span class="Badge _circular"></span></a>
    </li>
</ul>
```

#### Todo:
- Prever uso com ícone
