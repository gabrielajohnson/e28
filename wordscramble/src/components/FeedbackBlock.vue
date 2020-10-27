<template>
    <div>
        <div v-if='iscorrect'>You got it! Nice work.  <button @click="$emit('play-again')">Play again</button></div>
        <div v-if='!iscorrect'>Sorry, that’s not correct. Please try again.</div>
    </div>
</template>

<script>
export default {
    props: ['iscorrect'],
};
</script>

<style>
.correct{
  background:green;
  color:white;
}

.wrong{
  background:red;
  color:white;
}
</style>