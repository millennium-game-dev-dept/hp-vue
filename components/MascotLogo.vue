<template>
  <img class="mascot-logo" alt="mascot" src="../static/mascot.svg">
</template>

<style>
.mascot-logo {
  height: 120px;
  width: 120px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
