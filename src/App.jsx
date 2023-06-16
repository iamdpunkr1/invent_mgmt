import './App.css'

function App() {


  return (
          <div class="card bg-base-200 w-80">
            <div class="card-body">
              <input placeholder="Email" class="input input-bordered" />
              <label class="label cursor-pointer">
                Accept terms of use
                <input type="checkbox" class="toggle" />
              </label>
              <label class="label cursor-pointer">
                Submit to newsletter
                <input type="checkbox" class="toggle" />
              </label>
              <button class="btn btn-neutral">Save</button>
            </div>
          </div>
  )
}

export default App
