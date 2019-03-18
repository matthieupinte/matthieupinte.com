<template>
  <div>
    <section class="hero container">
      <h1>Hi, I’m <a href="https://www.linkedin.com/in/matthieupinte/" target="_blank">Matthieu</a></h1>
    </section>
    <footer>
      <div class="container">
        <ul class="social-list">
          <li><a href="https://github.com/matthieupinte" target="_blank"><fa :icon="['fab', 'github-square']" /></a></li>
          <li><a href="https://twitter.com/matthieupinte" target="_blank"><fa :icon="['fab', 'twitter-square']" /></a></li>
          <li><a href="https://www.linkedin.com/in/matthieupinte/" target="_blank"><fa :icon="['fab', 'linkedin']" /></a></li>
        </ul>
        <p class="available-on-github">"Code" available on <strong><a href="https://github.com/matthieupinte/matthieupinte.com" target="_blank">Github</a></strong></p>
      </div>
    </footer>
  </div>
</template>

<script></script>

<style>
.hero {
  display: flex;
  min-height: 100vh;
  align-items: center;
}

.container {
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}

h1 {
  margin: auto 0;
  font-weight: 300;
  font-size: 4.5rem;
}

a {
  color: #292A2B;
  text-decoration: none;
}

h1 a {
  border-bottom: 4px solid #292A2B;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;

  text-align: right;
}

.social-list {
  margin: 0 0 1rem;
  padding-left: 0;
  list-style: none
}

.social-list li {
  display: inline-block;
}

.social-list li:not(:last-child) {
  margin-right: .5rem;
}

.social-list li a {
  font-size: 1.75rem;
}

.available-on-github {
  font-size: .75rem;
}

@media (min-width: 576px) {
  .container {
      max-width: 540px;
  }
  h1 { font-size: 6rem }
}

@media (min-width: 768px) {
  .container {
      max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
</style>

