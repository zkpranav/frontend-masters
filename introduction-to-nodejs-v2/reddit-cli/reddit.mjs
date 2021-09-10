#! /usr/bin/env node

import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

const { argv } = yargs(process.argv)
// console.log(argv)

const res = await fetch('http://reddit.com/.json')
const data = await res.json()
// console.log(data)

const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)].data
const link = `https://reddit.com${randomPost.permalink}`


if (argv.print || argv.p) {
    console.log(`
        Title: ${randomPost.title}
        Subreddit: r/${randomPost.subreddit}
        Link: ${link}
    `)
} else {
    open(link)
}
