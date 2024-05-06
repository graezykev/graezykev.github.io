---
layout: post
title:  "Welcome to Jekyll 2!"
date:   2024-05-06 16:14:49 +0800
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

```js
function js() {
  console.error('err')
}
```

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')

# => prints 'Hi, Tom' to STDOUT

{% endhighlight %}

```mermaid

flowchart TB

comit_command1[git commit -m 'your message']

push_command1[git push origin branch-name]

lint_staged_c[eslint --fix your-staged-files]
style lint_staged_c fill:#bbf,stroke:#f66

NPM_lint_staged[npm run lint:staged]

NPM_lint_increment[npm run lint:incremental-push]

lint_increment_sh[lint-incremental-push-files.sh]
style lint_increment_sh fill:#bbf,stroke:#f66

NPM_test[npm run test]
style NPM_test fill:#bbf,stroke:#f66

commit_hook[git commit hook: .husky/pre-commit]
style commit_hook fill:#bbf,stroke:#f66

msg_hook[commit message hook: .husky/.commit-msg]
style msg_hook fill:#bbf,stroke:#f66

msg_config[commitlint.config.js]
style msg_config fill:#bbf,stroke:#f66

push_hook[git push hook: .husky/.pre-push]
style push_hook fill:#bbf,stroke:#f66

LintStagedSuccess{no error}
LintIncrementalSuccess{no error}
MsgPass{format is validated}
CommitSuccess(Commit Success)
testPass{test pass}
PushSuccess(Push Success)

comit_command1 --> |trigger| commit_hook --> |run| NPM_lint_staged --> |run| lint_staged --> lint_staged_c --> LintStagedSuccess --> |trigger| msg_hook --> |validate by| msg_config --> MsgPass --> CommitSuccess

push_command1 --> |trigger| push_hook --> |run| NPM_lint_increment --> |run| lint_increment_sh --> LintIncrementalSuccess --> |trigger| NPM_test --> testPass --> PushSuccess

```

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
