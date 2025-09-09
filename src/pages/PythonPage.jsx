import React, { useState } from 'react';

// DataTypeCard Created by Gemini Code Assist - not human checked
const DataTypeCard = ({ title, description, data }) => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="card bg-base-100 shadow-xl mb-6">
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p>{description}</p>
        <div className="tabs tabs-boxed">
          {data.map((tab, index) => (
            <a
              key={index}
              className={`tab transition-colors duration-200 ${activeTab === index ? 'tab-active font-bold' : ''}`}
              onClick={() => setActiveTab(activeTab === index ? null : index)}
            >
              {tab.name}
            </a>
          ))}
        </div>
        {activeTab !== null && (
        <div className="p-4 bg-base-200 rounded-box">
          <pre className="text-sm whitespace-pre-wrap"><code>{data[activeTab].content}</code></pre>
        </div>
        )}
      </div>
    </div>
  );
};

const PythonPage = () => {
  // Data Types and Structures
  const typesData = [
    { name: 'Integers', content: 'int' },
    { name: 'Floats', content: 'float' },
    { name: 'Complex Numbers', content: 'complex' },
    { name: 'Operations', content: '+, -, *, /, %, **, abs(x)'}
  ]
  const stringData = [
    { name: 'Creation', content: `'Hello', "World", """Multi-line string"""` },
    { name: 'Indexing/Slicing', content: `s = "Hello"
s[0] -> 'H'
s[-1] -> 'o'
s[1:4] -> 'ell'` },
    { name: 'upper()', content: 'Returns a copy of the string with all characters in uppercase.\n\nExample:\n\'hello\'.upper() -> \'HELLO\'' },
    { name: 'lower()', content: 'Returns a copy of the string with all characters in lowercase.\n\nExample:\n\'HELLO\'.lower() -> \'hello\'' },
    { name: 'capitalize()', content: 'Returns a copy of the string with the first character capitalized and the rest lowercase.\n\nExample:\n\'hello world\'.capitalize() -> \'Hello world\'' },
    { name: 'strip()', content: 'Returns a copy of the string with leading and trailing whitespace removed.\n\nExample:\n\'  hello  \'.strip() -> \'hello\'' },
    { name: 'split()', content: 'Returns a list of words in the string, using a delimiter as the separator.\n\nExample:\n\'hello world\'.split(\' \') -> [\'hello\', \'world\']' },
    { name: 'join()', content: 'Joins the elements of an iterable to the end of the string.\n\nExample:\n\'-\'.join([\'a\', \'b\', \'c\']) -> \'a-b-c\'' },
    { name: 'replace()', content: 'Returns a string where a specified value is replaced with a specified value.\n\nExample:\n\'hello world\'.replace(\'world\', \'Python\') -> \'hello Python\'' },
    { name: 'find()', content: 'Searches the string for a specified value and returns the position of where it was found.\n\nExample:\n\'hello world\'.find(\'world\') -> 6' },
    { name: 'startswith()', content: 'Returns true if the string starts with the specified value.\n\nExample:\n\'hello world\'.startswith(\'hello\') -> True' },
    { name: 'endswith()', content: 'Returns true if the string ends with the specified value.\n\nExample:\n\'hello world\'.endswith(\'world\') -> True' },
    { name: 'Formatting', content: `name = "World"
f"Hello, {name}" -> "Hello, World"
"Hello, {}".format(name) -> "Hello, World"` },
  ];

  const listData = [
    { name: 'Creation', content: `[]
[1, "hello", 3.14]
list(range(5)) -> [0, 1, 2, 3, 4]` },
    { name: 'append()', content: 'Adds an element to the end of the list.\n\nExample:\nmy_list = [1, 2]\nmy_list.append(3) -> [1, 2, 3]' },
    { name: 'extend()', content: 'Adds all elements of an iterable to the end of the list.\n\nExample:\nmy_list = [1, 2]\nmy_list.extend([3, 4]) -> [1, 2, 3, 4]' },
    { name: 'insert()', content: 'Inserts an element at a specific position.\n\nExample:\nmy_list = [1, 2]\nmy_list.insert(1, 3) -> [1, 3, 2]' },
    { name: 'remove()', content: 'Removes the first occurrence of an element.\n\nExample:\nmy_list = [1, 2, 3, 2]\nmy_list.remove(2) -> [1, 3, 2]' },
    { name: 'pop()', content: 'Removes and returns the element at a specific position (or the last element if no index is specified).\n\nExample:\nmy_list = [1, 2, 3]\nmy_list.pop(1) -> 2\nmy_list -> [1, 3]' },
    { name: 'sort()', content: 'Sorts the list in ascending order.\n\nExample:\nmy_list = [3, 1, 2]\nmy_list.sort() -> [1, 2, 3]' },
    { name: 'reverse()', content: 'Reverses the order of the elements in the list.\n\nExample:\nmy_list = [1, 2, 3]\nmy_list.reverse() -> [3, 2, 1]' },
    { name: 'copy()', content: 'Returns a shallow copy of the list.\n\nExample:\nmy_list = [1, 2]\nnew_list = my_list.copy() -> [1, 2]' },
    { name: 'count()', content: 'Returns the number of times an element appears in the list.\n\nExample:\nmy_list = [1, 2, 2]\nmy_list.count(2) -> 2' },
    { name: 'index()', content: 'Returns the index of the first occurrence of an element.\n\nExample:\nmy_list = [1, 2, 3]\nmy_list.index(2) -> 1' },
    { name: 'Comprehensions', content: `squares = [x**2 for x in range(10)]
even_numbers = [x for x in range(10) if x % 2 == 0]` },
    { name: 'Use Cases', content: `Storing collections of items.
Modifying lists (mutable).
Iterating through items.` },
  ];

  const tupleData = [
    { name: 'Creation', content: `(), (1, "hello", 3.14), 1, 2, 3` },
    { name: 'Operations', content: `t[0], t[-1], t[1:3]
len(t), min(t), max(t), sum(t)` },
    { name: 'Use Cases', content: `Immutable collections.
Dictionary keys.
Returning multiple values from a function.` },
  ];

  const dictionaryData = [
    { name: 'Creation', content: `{}
{'key': 'value', 'name': 'John'}
dict(key='value', name='John')` },
    { name: 'keys()', content: 'Returns a view object displaying a list of all the keys in the dictionary.\n\nExample:\nmy_dict = {\'a\': 1, \'b\': 2}\nmy_dict.keys() -> dict_keys([\'a\', \'b\'])' },
    { name: 'values()', content: 'Returns a view object displaying a list of all the values in the dictionary.\n\nExample:\nmy_dict = {\'a\': 1, \'b\': 2}\nmy_dict.values() -> dict_values([1, 2])' },
    { name: 'items()', content: 'Returns a view object displaying a list of key-value tuple pairs.\n\nExample:\nmy_dict = {\'a\': 1, \'b\': 2}\nmy_dict.items() -> dict_items([(\'a\', 1), (\'b\', 2)])' },
    { name: 'get()', content: 'Returns the value of the specified key. If the key does not exist, it returns a default value.\n\nExample:\nmy_dict = {\'a\': 1, \'b\': 2}\nmy_dict.get(\'a\', 0) -> 1\nmy_dict.get(\'c\', 0) -> 0' },
    { name: 'pop()', content: 'Removes the element with the specified key.\n\nExample:\nmy_dict = {\'a\': 1, \'b\': 2}\nmy_dict.pop(\'a\') -> 1\nmy_dict -> {\'b\': 2}' },
    { name: 'update()', content: 'Updates the dictionary with the specified key-value pairs.\n\nExample:\nmy_dict = {\'a\': 1}\nmy_dict.update({\'b\': 2}) -> {\'a\': 1, \'b\': 2}' },
    { name: 'Comprehensions', content: `squares = {x: x**2 for x in range(5)}` },
    { name: 'Use Cases', content: `Key-value storage.
Fast lookups.
Representing JSON data.` },
  ];
  
  const setData = [
    { name: 'Creation', content: `set(), {1, 2, 3, 3} -> {1, 2, 3}` },
    { name: 'add()', content: 'Adds an element to the set.\n\nExample:\nmy_set = {1, 2}\nmy_set.add(3) -> {1, 2, 3}' },
    { name: 'remove()', content: 'Removes the specified element. Raises a KeyError if the element is not found.\n\nExample:\nmy_set = {1, 2, 3}\nmy_set.remove(2) -> {1, 3}' },
    { name: 'discard()', content: 'Removes the specified element. Does not raise an error if the element is not found.\n\nExample:\nmy_set = {1, 2, 3}\nmy_set.discard(4) -> {1, 2, 3}' },
    { name: 'pop()', content: 'Removes and returns an arbitrary element from the set.\n\nExample:\nmy_set = {1, 2, 3}\nmy_set.pop() -> (returns 1, 2, or 3)' },
    { name: 'clear()', content: 'Removes all elements from the set.\n\nExample:\nmy_set = {1, 2}\nmy_set.clear() -> set()' },
    { name: 'union()', content: 'Returns a new set containing the union of sets.\n\nExample:\nset1 = {1, 2}\nset2 = {2, 3}\nset1.union(set2) -> {1, 2, 3}' },
    { name: 'intersection()', content: 'Returns a new set containing the intersection of sets.\n\nExample:\nset1 = {1, 2}\nset2 = {2, 3}\nset1.intersection(set2) -> {2}' },
    { name: 'difference()', content: 'Returns a new set containing the difference between two or more sets.\n\nExample:\nset1 = {1, 2}\nset2 = {2, 3}\nset1.difference(set2) -> {1}' },
    { name: 'Use Cases', content: `Storing unique items.
Membership testing.
Set operations (union, intersection, difference).` },
  ];

  // Control Flow & Functions
  const controlFlowData = [
    { name: 'If/Elif/Else', content: `if condition:
  # code
elif another_condition:
  # code
else:
  # code` },
    { name: 'For Loop', content: `for item in iterable:
  # code` },
    { name: 'While Loop', content: `while condition:
  # code` },
    { name: 'Loop Control', content: `break: exits the loop
continue: skips to the next iteration
pass: does nothing` },
  ];

  const functionData = [
    { name: 'Definition', content: `def my_function(param1, param2='default'):
  """Docstring explaining the function."""
  return param1 + param2` },
    { name: 'Arguments', content: `Positional: my_function(1, 2)
Keyword: my_function(param1=1, param2=2)
*args: for variable positional arguments
**kwargs: for variable keyword arguments` },
    { name: 'Lambda', content: `lambda arguments: expression
add = lambda x, y: x + y
add(5, 3) -> 8` },
  ];

  // Advanced Topics
  const oopData = [
    { name: 'Classes', content: `class MyClass:
  def __init__(self, name):
    self.name = name

  def greet(self):
    return f"Hello, {self.name}"` },
    { name: 'Objects', content: `my_object = MyClass("World")
my_object.greet() -> "Hello, World"` },
    { name: 'Inheritance', content: `class ChildClass(ParentClass):
  def __init__(self, name, age):
    super().__init__(name)
    self.age = age` },
  ];

  const fileIOData = [
    { name: 'Reading', content: `with open('file.txt', 'r') as f:
  content = f.read()` },
    { name: 'Writing', content: `with open('file.txt', 'w') as f:
  f.write('Hello, World!')` },
    { name: 'Modes', content: `'r': read (default)
'w': write (truncates file)
'a': append
'b': binary mode
'+': updating (read/write)` },
  ];

  const exceptionHandlingData = [
    { name: 'Try/Except', content: `try:
  # code that might raise an exception
except ValueError:
  # handle ValueError
except TypeError:
  # handle TypeError` },
    { name: 'Finally', content: `finally:
  # this code always executes` },
    { name: 'Raise', content: `if condition:
  raise ValueError("Invalid value")` },
  ];

  // Main Content
  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="hero bg-base-100 py-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Python</h1>
            <p className="py-6">Street Name: C_Wrapper</p>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Version</div>
                <div className="stat-value">1.0.0</div>
              </div>
              <div className="stat">
                <div className="stat-title">Author</div>
                <div className="stat-value">Jimmy Reed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-3xl font-bold my-4">Data Types and Structures</h2>

        <DataTypeCard title="Numeric Types" description="Integers, floats, and complex numbers." data={typesData} />
        <DataTypeCard title="Strings" description="An immutable sequence of Unicode characters." data={stringData} />
        <DataTypeCard title="Lists" description="A mutable, ordered sequence of elements." data={listData} />
        <DataTypeCard title="Tuples" description="An immutable, ordered sequence of elements." data={tupleData} />
        <DataTypeCard title="Dictionaries" description="A mutable, unordered collection of key-value pairs." data={dictionaryData} />
        <DataTypeCard title="Sets" description="An unordered collection of unique items." data={setData} />
        
        <legend className='text-3xl font-medium mb-2 mt-8'>Control Flow & Functions</legend>
        <DataTypeCard title="Control Flow" description="Tools to control the execution flow of your program." data={controlFlowData} />
        <DataTypeCard title="Functions" description="Reusable blocks of code." data={functionData} />

        <legend className='text-3xl font-medium mb-2 mt-8'>Advanced Topics</legend>
        <DataTypeCard title="Object-Oriented Programming" description="A programming paradigm based on the concept of 'objects'." data={oopData} />
        <DataTypeCard title="File I/O" description="Reading from and writing to files." data={fileIOData} />
        <DataTypeCard title="Exception Handling" description="Managing errors and exceptions in your code." data={exceptionHandlingData} />

      </div>

      {/* Footer Section */}
      <div className="p-4">
        <h2 className="text-3xl font-bold my-4">Python Frameworks and Libraries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card for numpy */}
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">numpy</h2>
            </div>
          </div>

          {/* Card for sqlite */}
          <div className="card bg-secondary text-secondary-content">
            <div className="card-body">
              <h2 className="card-title">sqlite</h2>
            </div>
          </div>

          {/* Card for pytorch */}
          <div className="card bg-accent text-accent-content">
            <div className="card-body">
              <h2 className="card-title">pytorch</h2>
            </div>
          </div>

          {/* Card for tensorflow */}
          <div className="card bg-info text-info-content">
            <div className="card-body">
              <h2 className="card-title">tensorflow</h2>
            </div>
          </div>

          {/* Card for pandas */}
          <div className="card bg-success text-success-content">
            <div className="card-body">
              <h2 className="card-title">pandas</h2>
            </div>
          </div>

          {/* Card for scikit-learn */}
          <div className="card bg-warning text-warning-content">
            <div className="card-body">
              <h2 className="card-title">scikit-learn</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonPage;
