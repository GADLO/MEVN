<template>
  <h1 class="title has-text-centered dividing-header">UpVote!</h1>
  <div class="section">
    <article
      v-for="submission in submissions"
      :key="submission.id"
      class="media"
      v-bind:class="{ 'blue-border': submission.votes >= 20 }"
    >
      <figure class="media-left">
        <img class="image is-64" v-bind:src="submission.avatar" />
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a href="#" class="has-text-info">{{ submission.title }}</a>
              <span class="tag is-small">#{{ submission.id }}</span>
            </strong>
            <br />
            {{ submission.description }}
            <br />
            <small class="is-size-7">
              Submitted by:
              <img class="image is-24x24" src="submission.submissionImage" />
            </small>
          </p>
        </div>
      </div>
      <div class="media-right">
        <span class="icon is-small" @click="upvote(submission.id)">
          <span class="up-arrow">&Hat;</span>
          <strong class="has-text-info">{{ submission.votes }}</strong>
        </span>
      </div>
    </article>
  </div>
</template>

<script>
const seed = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 16,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    submissionImage: '../public/images/submissions/image-yellow.png',
  },
  {
    id: 2,
    title: 'Blue Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 6,
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    submissionImage: '../public/images/submissions/image-yellow.png',
  },
  {
    id: 3,
    title: 'Green Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 8,
    avatar:
      'https://images.unsplash.com/photo-1617463570814-a368e94c9ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA1fHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    submissionImage: '../public/images/submissions/image-yellow.png',
  },
  {
    id: 4,
    title: 'White Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 12,
    avatar:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    submissionImage: '../public/images/submissions/image-yellow.png',
  },
];
export default {
  data() {
    return {
      submissions: seed,
    };
  },
  watch: {
    submissions() {
      return this.submissions.sort((a, b) => b.votes - a.votes);
    },
  },
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (sub) => sub.id === submissionId,
      );
      submission.votes += 1;
    },
  },
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
}

.app {
  display: grid;
  place-content: center;
  height: 100vh;
}

.section {
  display: grid;
  place-content: center;
  padding: 1rem;
}

.media {
  display: flex;
  padding: 2rem;
  /* border: 2px solid #ccc; */
  border-radius: 1rem;
  width: 50rem;
  margin: 1rem;
  background-color: #fff;
}

.blue-border {
  border: 2px solid #00a6fb;
  border-radius: 1rem;
}

.is-64 {
  width: 64px;
  height: 64px;
}

.image {
  object-fit: cover;
}

.up-arrow {
  font-size: 20px;
  padding-top: 10px;
  font-weight: 700;
}
</style>
