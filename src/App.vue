<template>
  <div>
    <!-- Header Section -->
    <div class="header">
      <div class="logo-container">
        <h1 class="logo">Vocab Master</h1>
        <nav>
          <router-link to="/" class="nav-item">Words</router-link>
          <router-link to="/new" class="nav-item">Add New Word</router-link>
        </nav>
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="main-content">
      <div class="content-wrapper">
        <div class="content-column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
/* General styling for the page */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* Header styling */
.header {
  background-color: #3a3a3a;
  padding: 20px 0;
  color: white;
}

.header .logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.header .logo {
  font-size: 28px;
  font-weight: bold;
}

nav {
  display: flex;
}

nav .nav-item {
  margin-right: 20px;
  text-decoration: none;
  color: white;
  font-size: 18px;
}

nav .nav-item:hover {
  color: #ffcc00;
}

/* Main content area styling */
.main-content {
  padding: 30px 20px;
}

.content-wrapper {
  display: flex;
  gap: 30px;
}

/* Content column styling */
.content-column {
  flex: 3;
}

/* Flash message styling */
.flash-message {
  background-color: #e0f7fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  color: #00796b;
}
</style>

