<template>
  <nav>
    <div class="nav-bar">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/cadastro">Cadastro</router-link>
      <router-link class="link" to="/cadastro-autor">Novo Autor</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
:root {
  --branco: #e6e6e6;
  --preto: #1d1c1c;
  --vermelho: #5a0626;
  --verde: #95dd95;
}

body {
  background: var(--branco);
  margin: 0;
  padding: 0;
  font-family: monospace;
}

nav {
  width: 100vw;
  height: 50px;
  background: #eceaea;
  box-shadow: 0px 0px 10px #3f3f3f;
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
}

.nav-bar {
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}

.link {
  text-decoration: none;
  color: var(--preto);
  transition: 0.3s;
}

.link:hover {
  color: var(--vermelho);
}
</style>
