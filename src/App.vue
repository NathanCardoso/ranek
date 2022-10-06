<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { api } from "./services";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
	created() {
		const token = window.localStorage.token
		if(token) {
			api.validateToken().then(() => {
				this.$store.dispatch('getUser')
			}).catch(error => {
				window.localStorage.removeItem('token')
				console.log(error)
			})
		}
	}
};
</script>

<style lang="scss">
/*Reset*/
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: rem(0);
  margin: rem(0);
}

ul {
  list-style: none;
}

body {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: $gray;
  background: url("./assets/icon/pattern.svg") repeat top;
}

a {
  color: $gray;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

/*App*/
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  #main {
    flex: 1;
  }
}

/*Container*/
.container {
  max-width: 100%;
  padding: 0 rem(20);

  &.container-default {
    max-width: rem(1200);
    margin: 0 auto;
  }
}

/*Button*/
.btn {
  padding: rem(10) rem(30);
  background: $purple;
  border-radius: rem(4);
  color: $white;
  text-align: center;
  font-size: rem(16);
  box-shadow: $shadow_alt;
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;

  &:hover {
    background: $purple_alt;
    transform: scale(1.1);
  }

	&.btn-disabled {
		background: $gray_alt;
		transform: scale(1);

		&:hover {
			background: $gray_alt;
		}
	}
}

/*Style of the input and textarea*/
label {
	margin-bottom: rem(5);
}

input,
textarea {
  border-radius: rem(4);
  border: rem(1) solid white;
  padding: rem(15);
  box-shadow: $shadow;
  transition: all 0.3s;
  font-size: rem(16);
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  margin-bottom: rem(15);

  &:hover,
  &:focus {
    outline: none;
    box-shadow: rem(0) rem(6) rem(12) $shadow_alt;
    border-color: $purple;
  }
}

/*Animate*/
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, rem(-20), 0);
}

.v-leave-to {
  transform: translate3d(0, rem(20), 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
