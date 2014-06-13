---
layout: page
title: "Ruby Style Guidelines"
description: ""
---

## Style

Limit lines to 80 characters.
Never leave trailing whitespace.
End each file with a newline.
Avoid more than three levels of block nesting.

### Indentation

Use two spaces per level of indentation. No hard tabs.

{% highlight ruby %}
  def some_method
    do_something
  end
{% endhighlight %}

For case statements, 'when' should align with 'case'.

{% highlight ruby %}
case
when thing == 'thing'
  do_something
when thing == 'other thing'
  do_something_else
else
  do_something_completely_different
end
{% endhighlight %}

When assigning with a case statement, everything should be indented and aligned.

{% highlight ruby %}
thing =
  case foo
  when foo then 'bar'
  when bar then 'foo'
  else 'baz'
  end

thing =
  if foo
    'bar'
  else
    'baz'
  end
{% endhighlight %}

### Line format

Use new lines per expressions or statements, do  not use ;.

{% highlight ruby %}
# bad
puts 'foo'; puts 'bar'

# good
puts 'foo'
puts 'bar'
{% endhighlight %}

Use an empty line between methods.

{% highlight ruby %}
def some_method
  do_something
end

def some_method
  do_something
end
{% endhighlight %}

Use an empty line to break methods into logical sections.

{% highlight ruby %}
def some_method
  data = initialize

  data.do_something

  data.result
end
{% endhighlight %}

Use lines to separate long list of parameters.

{% highlight ruby %}
# bad
def send_mail(source)
  Mailer.deliver(to: 'email@example.com', from: 'another@example.com', subject: 'Some title', body: "foo bar baz")
end

# good
def send_mail(source)
  Mailer.deliver(
    to: 'email@example.com',
    from: 'another@example.com',
    subject: 'Some title',
    body: "foo bar baz"
  )
end
{% endhighlight %}

Align array elements over multiple lines.

{% highlight ruby %}
# bad
menu_item = ['Foo', 'Foo', 'Foo', 'Foo', 'Foo', 'Foo', 'Foo', 'Foo',
  'Foo', 'Foo', 'Foo', 'Foo', 'Foo']

# good
menu_item = [
  'Foo', 'Foo', 'Foo', 'Foo', 'Foo', 'Foo', 'Foo', 'Foo',
  'Foo', 'Foo', 'Foo', 'Foo', 'Foo'
]
{% endhighlight %}

Use single line format for empty class definitions.

{% highlight ruby %}
# bad
class Suprise < StandardError
end

# good
class Suprise < StandardError; end

# good
Suprise = Class.new(StandardError)
{% endhighlight %}

Use multi line format for methods.

{% highlight ruby %}
# bad
def some_method; do_something; end

# good
def some_method
  do_something
end
{% endhighlight %}

### Whitespace

Use white space to make your code more readable.

{% highlight ruby %}
thing = 1 + 4 - 10
a, b, c, d
[1, 2, 3].each { | k, v | puts v if k == 10 }
"interpolate #{ this }"
{% endhighlight %}

There are a few exceptions where you cannot use whitespace as it will cause an error.

{% highlight ruby %}
some_method(argument)
["some", "array"].first
!something
{% endhighlight %}

## Syntax

Use :: only to reference constants and constructors, not for regular method invocation.

{% highlight ruby %}
FooClass.some_method
foo_object.some_method
BareModule::FooClass::CONSTANT
BarModule::FooClass
{% endhighlight %}

Only use parentheses on methods that accept parameters.

{% highlight ruby %}
def some_method
  body
end

def some_method(arg1, arg2)
  body
end
{% endhighlight %}

Use the each method in favour of the for method.

{% highlight ruby %}
# bad
for element in array do
  puts element
end

# good
array.each { |element| puts element }
{% endhighlight %}

When it is readable and not multiline, favour the ternary opertor over an if statment.

{% highlight ruby %}
# bad
thing = if foo == bar then do_something else do_something_else end

# good
thing = foo == bar ? do_something : do_something_else
{% endhighlight %}

Unless it is a single conditional.

{% highlight ruby %}
do_something if foo == bar
{% endhighlight %}

Do not use !! to check if a value is nil, instead use .nil?.

{% highlight ruby %}
# bad
if !!foo

# good
unless foo.nil?
{% endhighlight %}

Use operators, not keywords.

{% highlight ruby %}
and   # bad
&&    # good

or    # bad
||    # good

not   # bad
!     # good
{% endhighlight %}

Don't use double negatives.

{% highlight ruby %}
if !condition     # bad
unless condition  # good

while !condition  # bad
until condition   # good
{% endhighlight %}

Omit the outer braces around an implicit options hash.

{% highlight ruby %}
# bad
user.set({ name: 'admin',  authorization: { read: true, write: true } })

# good
user.set(name: 'admin',  authorization: { read: true, write: true })
{% endhighlight %}

Use { } for single-line blocks.

{% highlight ruby %}
# bad
things.each do |thing|
  puts thing
end

# good
things.each { |thing| puts thing }
{% endhighlight %}

Avoid return where not required.

{% highlight ruby %}
# bad
def some_method
  return something
end

# good
def some_method
  something
end
{% endhighlight %}

Use shorthand self assignment operators whenever applicable.

{% highlight ruby %}
# bad
x = x + y     is the same as     x += y
x = x * y     is the same as     x *= y
x = x**y      is the same as     x **= y
x = x / y     is the same as     x /= y
x = x && y    is the same as     x &&= y
{% endhighlight %}

Use ||= when you want to initialise variables only if they're not already initialised.

{% highlight ruby %}
foo ||= 'bar'
{% endhighlight %}

Use &&= to preprocess variables that may or may not exist.

{% highlight ruby %}
# bad
if something
  something = something.downcase
end

# good
something &&= something.downcase
{% endhighlight %}

Use the new lambda literal syntax for single line body blocks.

{% highlight ruby %}
l = ->(x, y) { x = y }
{% endhighlight %}

Use the lambda method for multi-line blocks.

{% highlight ruby %}
l = lambda do |x, y|
  foo = y
  bar = x
end
{% endhighlight %}

Prefer proc over Proc.new.

{% highlight ruby %}
# bad
p = Proc.new { |n| puts n }
p.()

# good
p = proc { |n| puts n }
p.call()
{% endhighlight %}

Favour the use of predicate methods to explicit comparisons.

{% highlight ruby %}
x.even?
x.odd?
x.nil?
x.zero?
{% endhighlight %}

## Classes

Avoid self where not required. It is only required when calling a self write accessor.

Use a consistent structured order in classes.

1. extend and include
2. constants
3. attribute macros
4. other macros
5. public class methods
6. public instance methods
7. protected methods
8. private methods

Prefer modules to classes with only class methods. Classes should be used only when it makes sense to create instances out of them.

{% highlight ruby %}
# bad
class SomeClass
  def self.some_method
    do_something
  end

  def self.some_other_method
  end
end

# good
module SomeClass

  def some_method
    do_something
  end

  def some_other_method
  end
end
{% endhighlight %}

Use attr functions to define accessors.

{% highlight ruby %}
class Foo
  attr_reader :bar, :baz
end
{% endhighlight %}

Avoid the usage of class variables. It will cause unexpected results with inheritance. Class instance variables should usually be preferred over class variables.

Assign proper visibility levels to methods (private, protected) in accordance with their intended usage.

{% highlight ruby %}
class FooClass
  def public_method
    do_something
  end

  private

  def private_method
    do_something
  end
end
{% endhighlight %}

Use def self.method to define singleton methods.

{% highlight ruby %}
class FooClass
  def self.some_method
    do_something
  end
end
{% endhighlight %}

Or if you have multiple.

{% highlight ruby %}
class FooClass

  module ClassMethods
    def some_method
      do_something
    end

    def other_method
      do_something
    end
  end

end
{% endhighlight %}

## Methods

Avoid hashes as optional parameters. Does the method do too much? Object initialisers are exceptions for this rule.
Ideally, most methods will be shorter than 5 lines. Empty lines do not contribute to this.

## Arrays and Hashes

Prefer literal array and hash creation notation.

{% highlight ruby %}
arr = []
hash = {}
{% endhighlight %}

Prefer %w for strings, or %i for symbols to the literal array syntax.

{% highlight ruby %}
things = %w(draft open closed)
things = %i(draft open closed)
{% endhighlight %}

Prefer symbols instead of strings as hash keys.

{% highlight ruby %}
hash = { foo: 1, bar: 2, baz: 3 }
{% endhighlight %}

## Strings

Use string interpolation rather than string concatenation.

{% highlight ruby %}
# bad
foo = bar.baz + ', ' + bar.qux

# good
foo = "#{ bar.baz }, #{ bar.qux }"
{% endhighlight %}

Prefer double-quotes unless your string literal contains " or escape characters you want to suppress.

{% highlight ruby %}
foo = "Bar"
{% endhighlight %}

## Exceptions

Don't use exceptions to control flow.

{% highlight ruby %}
# bad
begin
  foo / bar
rescue ZeroDivisionError
  "Can't do this"
end

# good
if foo.zero?
  "Can't do this"
else
  foo / bar
end
{% endhighlight %}

Use raise only when catching an exception and re-raising it.

{% highlight ruby %}
begin
  fail 'BAD'
rescue => error
  raise if error.message != 'BAD'
end
{% endhighlight %}

Supply an exception class and a message as two separate arguments.

{% highlight ruby %}
# bad
fail SomeException.new('message')

# good
fail SomeException, 'message'
{% endhighlight %}

Use implicit begin blocks where possible.

{% highlight ruby %}
# bad
def foo
  begin
    # main logic goes here
  rescue
    # failure handling goes here
  end
end

# good
def foo
  # main logic goes here
rescue
  # failure handling goes here
end
{% endhighlight %}

## Naming

Name identifiers in English.
Use snake_case for naming files and directories.
Use snake_case for symbols, methods and variables and constants.

{% highlight ruby %}
:some_symbol

def some_method
  ...
end

SOME_CONSTANT = nil
{% endhighlight %}

Use CamelCase for classes and modules.

{% highlight ruby %}
class SomeClass
  ...
end
{% endhighlight %}

Methods that return a boolean value should end in a question mark.

{% highlight ruby %}
class boolean_method?
  ...
end
{% endhighlight %}

Methods which overwrite a value should end with a bang if there is a non bang version available.

{% highlight ruby %}
class Foo
  def bar!
  end

  def bar
  end
end
{% endhighlight %}

## Commenting

Good code is its own best documentation. As you're about to add a comment, ask yourself, "How can I improve the code so that this comment isn't needed?"   Improve the code and then document it to make it even clearer.
-- Steve McConnell

Keep comments up to date.
Don't use block comments. They cannot be preceded by whitespace and are not as easy to spot as regular comments.

{% highlight ruby %}
# bad
=begin
comment line
another comment line
=end

# good
# comment line
# another comment line

{% endhighlight %}
