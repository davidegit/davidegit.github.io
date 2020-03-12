<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <a href="https://github.com/davidegit" target="_blank" style="text-decoration: none;">@DavideGit</a>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-row justify="center">
          <v-btn color="primary" href="https://davidegit.github.io/vue-ui-table/index.html" target="_blank">Vue UiTable</v-btn>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }} @DavideGit</span>
    </v-footer>
  </v-app>
</template>
