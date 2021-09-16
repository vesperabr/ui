---
title: Form
---

<div example>
    <form class="Form">
        <div class="form-items">
            <div class="form-item">
                <label>Nome</label>
                <div>
                    <input type="text" placeholder="Digite seu nome completo">
                </div>
            </div>
            <div class="form-item">
                <label>E-mail</label>
                <div>
                    <input type="email" placeholder="Digite seu e-mail">
                </div>
            </div>
            <div class="form-item">
                <label>Tipo</label>
                <div>
                    <select>
                        <option>Selecione...</option>
                        <option>Administrador</option>
                        <option>Usuário</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-buttons">
            <button class="Button">Salvar</button>
            <button class="Button _link">Cancelar</button>
        </div>
    </form>
</div>

```php
<form class="Form">
    <div class="form-items">
        <div class="form-item">
            <label>Nome</label>
            <div>
                <input type="text">
            </div>
        </div>
    </div>
    <div class="form-buttons">
        <button class="Button">Enviar</button>
    </div>
</form>
```

### Form group
<div example>
    <form class="Form">
        <div class="form-items">
            <div class="form-group">
                <label>Valor</label>
                <div>
                    <div class="prepend">R$</div>
                    <input type="text">
                </div>
            </div>
            <div class="form-group">
                <label>E-mail</label>
                <div>
                    <input type="text">
                    <div class="append">@vespera.com.br</div>
                </div>
            </div>
            <div class="form-group">
                <label>URL</label>
                <div>
                    <div class="prepend">https://</div>
                    <input type="text">
                    <div class="append">.vespera.com.br</div>
                </div>
            </div>
        </div>
    </form>
</div>

```php
<div class="form-group">
    <label>...</label>
    <div>
        <div class="prepend"></div>
        <input type="text">
        <div class="append"></div>
    </div>
</div>
```

### Form + Row
<div example>
    <form class="Form">
        <div class="Row _gutters _mb-lg">
            <div class="col-4">
                <div class="Title _sm">Dados pessoais</div>
                <p class="_muted">Informe seus dados para preenchermos sua ficha</p>
            </div>
            <div class="col-8 form-items">
                <div class="form-item">
                    <label>Nome</label>
                    <div>
                        <input type="text" placeholder="Digite seu nome completo">
                    </div>
                </div>
                <div class="form-item">
                    <label>E-mail</label>
                    <div>
                        <input type="email" placeholder="Digite seu e-mail">
                    </div>
                </div>
                <div class="form-item">
                    <label>Tipo</label>
                    <div>
                        <select>
                            <option>Selecione...</option>
                            <option>Administrador</option>
                            <option>Usuário</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="Row _gutters">
            <div class="col-4">
                <div class="Title _sm">Endereço</div>
                <p class="_muted">Informe seu endereço para enviarmos seus pedidos</p>
            </div>
            <div class="col-8 form-items">
                <div class="Row _gutters-sm">
                    <div class="col-4 form-item">
                        <label>CEP</label>
                        <div>
                            <input type="text">
                        </div>
                    </div>
                </div>
                <div class="Row _gutters-sm">
                    <div class="col-6 form-item">
                        <label>Rua</label>
                        <div>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-3 form-item">
                        <label>Número</label>
                        <div>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-3 form-item">
                        <label>Compl.</label>
                        <div>
                            <input type="text">
                        </div>
                    </div>
                </div>
                <div class="Row _gutters-sm">
                    <div class="col-4 form-item">
                        <label>Bairro</label>
                        <div>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-4 form-item">
                        <label>Cidade</label>
                        <div>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-4 form-item">
                        <label>UF</label>
                        <div>
                            <select>
                                <option>Selecione...</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Row _gutters">
            <div class="col-8 _offset-4">
                <div class="form-buttons">
                    <button class="Button">Salvar</button>
                    <button class="Button _link">Cancelar</button>
                </div>
            </div>
        </div>
    </form>
</div>

```php
<form class="Form">
    <div class="Row _gutter">
        <div class="col-4">...</div>
        <div class="col-8">
            <div class="form-items">
                <div class="form-item"></div>
            </div>
        </div>
    </div>
    <div class="form-buttons">
    </div>
</form>
```
