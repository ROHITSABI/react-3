import React from "react";

function Home() {
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form action="" method="post">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
