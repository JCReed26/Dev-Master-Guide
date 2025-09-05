import React from 'react';

const PythonPage = () => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <div class="hero bg-base-100 py-10">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Python</h1>
            <p class="py-6">Street Name: C_Wrapper</p>
            <div class="stats shadow">
              <div class="stat">
                <div class="stat-title">Version</div>
                <div class="stat-value">1.0.0</div>
              </div>
              <div class="stat">
                <div class="stat-title">Author</div>
                <div class="stat-value">Jimmy Reed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Types w/ Functions */}
      <div>
        <legend className='text-3xl font-medium mb-2'>Data Structures</legend>
        <div class="collapse bg-base-200 mb-2">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            List
          </div>
          <div class="collapse-content">
            {/* Needs to become section for all integer types */}
            <div className='fieldset mb-2 text-xl'>Accessing & Sclicing</div>
            <div className='fieldset text-sm'>First Element</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list[0]</code></pre>
            <div className='fieldset text-sm'>Last Element</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list[-1]</code></pre>
            <div className='fieldset text-sm'>Slice from index 1 up to but not including index 3</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list[1:3] - # slice from index 1 up to but not including index 3 </code></pre>
            <div className='fieldset text-sm'></div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list[::2] - # every other element</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code></code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code></code></pre>

            <br />

            <div className='fieldset mb-2 text-xl'>Methods</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.append(x)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.extend(iterable)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.insert(i, x)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.remove(x)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.pop([i])</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.clear()</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.index(x, [start, end])</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.count(x)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.sort(key=None, reverse=False)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>my_list.copy()</code></pre>

            <br />

            <div className='fieldset mb-2 text-xl'>Functions</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>len(my_list)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>sum(my_list)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>min(my_list)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>max(my_list)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>sorted(my_list)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>list(iterable)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>any(my_list)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>all(my_list)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>enumerate(my_list)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>zip(list_A, list_B)</code></pre>


            <br />

            <div className='fieldset mb-2 text-xl'>Iterating</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>for item in my_list: print(item)</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>for i, value in enumerate(my_list): print(i, value)</code></pre>

            <br />

            <div className='fieldset mb-2 text-xl'>Operations</div>
            <div className='fieldset text-sm'>  Concatenation</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>[1, 2] + [3, 4] = [1, 2, 3, 4]</code></pre>
            <div className='fieldset text-sm'>  Repetition</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>[1, 2] * 3 = [1, 2, 1, 2, 1, 2]</code></pre>
            <div className='fieldset text-sm'>Membership</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>3 in [1, 2, 3, 4] = True</code></pre>

            <br />

            <div className='fieldset mb-2 text-xl'>Comprehensions</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>squares = [x**2 for x in range(5)]</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>evens = [x for x in range(10)]</code></pre>

            <br />

            {/* Example section 

            <div className='fieldset mb-2 text-xl'>Example</div>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>1</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>2</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>3</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>4</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>5</code></pre>
            <pre className="bg-base-300 p-0.2 rounded text-sm"><code>6</code></pre>

            <br />

            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonPage;
