<template>
  <nav class="flex items-center justify-between flex-wrap container py-2">
    <div class="flex items-center flex-shrink-0 text-black mr-10">
      <g-link exact to="/">
        <strong class="text-lg">{{ $static.metaData.siteName }}</strong>
      </g-link>
    </div>
    <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-md sm:flex-grow">
        <g-link
          class="block mt-4 sm:inline-block sm:mt-0 text-teal-400 hover:text-gray-700 mr-4"
          to="/"
        >Home</g-link>
        <g-link
          class="block mt-4 sm:inline-block sm:mt-0 text-teal-400 hover:text-gray-700 mr-4"
          to="/blog"
        >Blog</g-link>
        <g-link
          class="block mt-4 sm:inline-block sm:mt-0 text-teal-400 hover:text-gray-700 mr-4"
          to="/about"
        >About</g-link>
      </div>
      <div>
        <g-link
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-400 hover:bg-gray-700 mt-4 md:mt-0"
          to="/admin/#/"
        >Login</g-link>
      </div>
    </div>
  </nav>
</template>

  <static-query>
    query {
      metaData {
    siteName
  }
}
</static-query>