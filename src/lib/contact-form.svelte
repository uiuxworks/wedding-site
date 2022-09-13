<script>
  let submissionStatus = "";
  const handleSubmit = async (data) => {
    submissionStatus = "submitting";
    const formData = new FormData(data.currentTarget);
    const res = await fetch("/contact-form.json", {
      method: "POST",
      body: formData,
    });

    //   let questions = [
    // 	{ id: 1, text: `Not confimed` },
    // 	{ id: 2, text: `What is your mother's name?` },
    // 	{ id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
    // ];

    //   let selected;

    const { message } = await res.json();
    submissionStatus = message;
  };
</script>

{#if submissionStatus === "submitting"}
  <p>Submitting...</p>
{:else if submissionStatus === "failed"}
  <p>Submission failed.</p>
{:else if submissionStatus === "success"}
  <h1 class="py-32 tex-2xl">Submission success.</h1>
{:else}
<div class="mx-auto max-w-7xl w-full pb-32">
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <form class="mx-auto max-w-5xl" on:submit|preventDefault={handleSubmit}>
    <div class="bg-white p-4 rounded-lg py-20">
      <!-- <div class="relative bg-inherit mb-10">
        <input
          type="text"
          id="username"
          name="username"
          class="peer bg-transparent h-10 w-64 rounded-sm text-gray-800 placeholder-transparent ring-1 px-3 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          placeholder="Guest Name"
        /><label
          for="username"
          class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >Guest Name</label
        >
      </div> -->

      <div class="">
        <!-- <div class="mb-4">Guest Name</div> -->
        <!-- <div class="relative bg-inherit">
          <input
            type="text"
            id="username1"
            name="username1"
            class="peer bg-gray-100 h-10 w-64 rounded-lg text-gray-800 placeholder-transparent ring-2 px-2 ring-gray-100 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
            placeholder="Guest's Name"
          /><label
            for="username1"
            class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 rounded-lg bg-transparent mx-1 px-1.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:bg-gray-200 peer-focus:text-sm transition-all"
            >Guest's Name</label
          >
        </div> -->

      </div>
    </div>

    <label for="name">
      <span>Name</span>
    </label>
    <input
      type="text"
      name="name"
      aria-label="name"
      placeholder="Enter your name"
      required
    />
    Can you attend?
    <select name="status">
      <option value="Coming">Comming</option>
      <option value="Not Coming">Not Coming</option>
    </select>
    Bringing?
    <select name="extra">
      <option value="Just Me">Just Me</option>
      <option value="+1 Person">+1 Person</option>
    </select>

    <input type="submit" />
  </form>
</div>
{/if}

<!-- <style>
  form {

  }
  form label {
    display: block;
    margin-bottom: 1rem;
  }
  form input,
  form textarea {
    display: block;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  form input[type='submit'] {
    background: #663399;
    color: #fff;
    padding: 0.5rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
</style> -->
