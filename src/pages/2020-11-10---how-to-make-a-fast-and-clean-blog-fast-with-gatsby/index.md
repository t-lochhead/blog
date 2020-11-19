---
title: "How To Make a Blog With Gatsby That's Fast, Unique, and Free (Almost)"
date: "2020-11-10"
# tags:
#   - open source
#   - gatsby
#   - typography.js
# draft: true
---

**_This article will show you how build a blog like this one._**

Ever have all these ideas that you want to share with the world, but a tweet or Facebook post doesn't cut it?

Looking for creative ways to promote your work and that goes a bit beyond shameless self-promotion?

Then you're probably thinking about starting a blog.

But where do you start? And how much does it cost?

There are plenty of free blogging platforms that are easy to set up. The drawbacks are usually lackluster design ([Blogger](https://blogger.com)) or lack of personality ([Medium](https://medium.com)).

Then there are a whole slew of paid options. It's very easy to get suckered into paying over \$300 for 3 years of hosting, a domain, and a bunch of useless features. They're often very sluggish as well.

Enter Gatsby.

## Why Gatsby?

[Gatsby](https://www.gatsbyjs.com) describes themselves as follows:

> Gatsby is a React-based open source framework for creating websites and apps. Build anything you can imagine with over 2000 plugins and performance, scalability, and security built-in by default.

Gatsby is [widely considered](https://snipcart.com/blog/choose-best-static-site-generator) as one of the [best frameworks](https://www.creativebloq.com/features/10-best-static-site-generators) for [creating static websites](https://dev.to/integridsolutions/best-static-site-generator-to-use-in-2020-4kjk) - i.e. blogs.

#### Page Speed

One of the top reasons Gatsby is so great is because of its **_speed_**. Without getting into too much detail, if you care at all about having your blog show up in Google search results and providing a positive user experience for your visitors, then you should have an interest in page speed.

I won't belabor the details, but you can read more at [seoClarity](https://www.seoclarity.net/resources/knowledgebase/why-page-speed-matters-16167/).

#### Learn How to Deploy a Web App

If you're new to web app development, Gatsby is a great way to start. There is no cost to host a web app, so you can try, fail, and learn as much as you want without paying a single cent.

The only thing that isn't free is buying a domain.

Hosting - on the other hand - is **_free_** with services I'll get into later in the article.

If you are indeed new, you'll want to learn about Node.js first before going any further. I'd recommend doing some [Googling](https://www.google.com/search?q=nodejs+introduction) and [YouTubing](https://www.youtube.com/results?search_query=nodejs+introduction) to get up to speed. You'll also want to learn about GitHub. [HubSpot has a great tutorial to get you started](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners).

## Starting With Starters

Starting any project is easier when you work off of something existing than just a blank canvas.

#### Official Gatsby Starters

One place to find starters is the [official Gatsby Starters](https://www.gatsbyjs.com/starters/?v=2) page.

There, you can filter for blogs, portfolios, landing pages, and more. Keep in mind, some of these starters are built off of CMSs like Contentful, Prismic, and even WordPress. If you're looking for something lean, I recommend filtering for Markdown. That's what I ended up using for this blog. Markdown provides a lot more simplicity and flexibility over CMSs in my opinion.

Unfortunately, I personally wasn't inspired by any of the starters found there in terms of visual design.

#### Gatsby Starters on GitHub

If you find yourself in the situation I was in, head over to GitHub and search public repos. I found the search ["gatsby blog"](https://github.com/search?q=gatsby+blog) lead to many inspiring results.

I ended up stumbling upon [Kyle Mathews's blog](https://github.com/KyleAMathews/blog), who just so happens to be the co-founder of Gatsby.

You're welcome to start with my starter [here](http://github.com/t-lochhead/blog).

#### Starting a Starter

The easiest way to get started with a starter is as follows.

First install Gatsby.

```
npm install -g gatsby-cli
```

Then download the starter.

```
gatsby new blog http://github.com/t-lochhead/blog
```

Finally, navigate to the starter's directory and start it up.

```
cd blog/
gatsby develop
```

You'll now be able to see how it looks like when you visit `http://localhost:8000` in your web browser.

## Making It Your Own

You may be tempted just change the text of a starter and nothing else. While you're welcome to do this, you give up the opportunity to make your blog visually unique.

An easy way to make your blog visually unique is to change the colors and replace any elements that are notably original.

In my case, I removed the elements that produced the bold "K" design on the homepage and took a stab at doing something different.

After experimenting with different colors, I ended up going for a modest Vaporwave aesthetic. I sourced an awesome gif from [GIPHY](https://giphy.com/search/vaporwave) by designer [Guillaume Kurkdjian](https://www.instagram.com/guillaumekurkdjian/) and applied a palette of pastel CMYK colors to the site.

You can remove or add further depending on your needs and programming comfort level. To this extent, I also added [Portfolio](/portfolio) and [Contact](/contact) pages.

## Going Live 🎉

Once you're ready to go live with your blog, you have a few options for free hosting.

Two popular options are [Netlify](https://www.netlify.com) and [Vercel](https://vercel.com).

I personally use Vercel, but Netlify is great too.

Sign up with either and deploy your blog for free!

The one last step that does require payment is getting a domain.

I'm a big fan of [namecheap](https://namecheap.com) to source domains. I'm not affiliated with them. I just appreciate their transparency and cost fairness.

And that's it! If you have any questions or want to share the blog you made, send me an email @ tavislochhead [ at ] gmail [ dot ] com.
