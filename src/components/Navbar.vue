<template>
  <div class="mb-5">
    <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <g-link exact to="/">
          <strong>{{ $static.metaData.siteName }}</strong>
        </g-link>
      </div>

      <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
          <g-link
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
            to="/"
          >Home</g-link>
          <g-link
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
            to="/blog"
          >Blog</g-link>
          <g-link
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
            to="/about"
          >About</g-link>
        </div>
        <div>
          <g-link
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            to="/login"
          >Login</g-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>