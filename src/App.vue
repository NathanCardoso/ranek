<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #345;
  background: url("./assets/icon/pattern.svg") repeat top;
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  #main {
    flex: 1;
  }
}

.container {
  max-width: 100%;
  padding: 0 20px;
}

.btn {
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
  
	&:hover {
    background: #65d;
    transform: scale(1.1);
  }
}

input, textarea {
	border-radius: 4px;
	border: 1px solid white;
	padding: 15px;
	box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
	transition: all .3s;
	font-size: 1rem;
	font-family: "Avenir", Arial, Helvetica, sans-serif;
	margin-bottom: 15px;

	&:hover, &:focus {
		outline: none;
		box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
		border-color: #87f;
	}
}
</style>
