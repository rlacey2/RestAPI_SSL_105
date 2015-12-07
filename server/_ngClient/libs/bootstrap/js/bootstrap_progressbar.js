<!DOCTYPE html>
<!-- saved from url=(0082)https://github.com/angular-ui/bootstrap/blob/master/src/progressbar/progressbar.js -->
<html lang="en" class=" is-copy-enabled"><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>bootstrap/progressbar.js at master · angular-ui/bootstrap · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="https://github.com/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://github.com/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://github.com/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://github.com/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site"><meta content="summary" name="twitter:card"><meta content="angular-ui/bootstrap" name="twitter:title"><meta content="Native AngularJS (Angular) directives for Bootstrap. Smaller footprint (20kB gzipped), no 3rd party JS dependencies (jQuery, bootstrap JS) required. Please read the README.md file before submitting..." name="twitter:description"><meta content="https://avatars0.githubusercontent.com/u/1530011?v=3&amp;s=400" name="twitter:image:src">
      <meta content="GitHub" property="og:site_name"><meta content="object" property="og:type"><meta content="https://avatars0.githubusercontent.com/u/1530011?v=3&amp;s=400" property="og:image"><meta content="angular-ui/bootstrap" property="og:title"><meta content="https://github.com/angular-ui/bootstrap" property="og:url"><meta content="Native AngularJS (Angular) directives for Bootstrap. Smaller footprint (20kB gzipped), no 3rd party JS dependencies (jQuery, bootstrap JS) required. Please read the README.md file before submitting..." property="og:description">
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host"><meta content="github" name="octolytics-app-id"><meta content="6D4E9F8A:2B78:7BB864:5660CF75" name="octolytics-dimension-request_id">




  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="New repo nav">




        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="7cfe2afbff40808538d6789ab48c8a80bf8887ab" name="form-nonce">

    <link crossorigin="anonymous" href="./bootstrap_progressbar_files/github-d7e0b0c4fd7711345cdfc8fa9695541f6b64640cfc5897e9ea2337eba685ec9c.css" integrity="sha256-1+CwxP13ETRc38j6lpVUH2tkZAz8WJfp6iM366aF7Jw=" media="all" rel="stylesheet">
    <link crossorigin="anonymous" href="./bootstrap_progressbar_files/github2-a2501013b84e6062c9171a31d4fdb2225390126ddc5d8453188bc41b2a82ce18.css" integrity="sha256-olAQE7hOYGLJFxox1P2yIlOQEm3cXYRTGIvEGyqCzhg=" media="all" rel="stylesheet">
    
    
    


    <meta http-equiv="x-pjax-version" content="a3eafbb29f29fa14c645e85f00181fd3">

      
  <meta name="description" content="Native AngularJS (Angular) directives for Bootstrap. Smaller footprint (20kB gzipped), no 3rd party JS dependencies (jQuery, bootstrap JS) required. Please read the README.md file before submitting an issue!">
  <meta name="go-import" content="github.com/angular-ui/bootstrap git https://github.com/angular-ui/bootstrap.git">

  <meta content="1530011" name="octolytics-dimension-user_id"><meta content="angular-ui" name="octolytics-dimension-user_login"><meta content="6094683" name="octolytics-dimension-repository_id"><meta content="angular-ui/bootstrap" name="octolytics-dimension-repository_nwo"><meta content="true" name="octolytics-dimension-repository_public"><meta content="false" name="octolytics-dimension-repository_is_fork"><meta content="6094683" name="octolytics-dimension-repository_network_root_id"><meta content="angular-ui/bootstrap" name="octolytics-dimension-repository_network_root_nwo">
  <link href="https://github.com/angular-ui/bootstrap/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap:master" type="application/atom+xml">

  <meta name="selected-link" value="repo_source" data-pjax-transient="true"><meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event"><meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location"><link href="https://github.com/angular-ui/bootstrap/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap:master" type="application/atom+xml" data-pjax-transient="true"></head>


  <body class="logged_out   env-production windows vis-public">
    <a href="https://github.com/angular-ui/bootstrap/blob/master/src/progressbar/progressbar.js#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="https://github.com/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="https://github.com/login?return_to=%2Fangular-ui%2Fbootstrap" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="https://github.com/angular-ui/bootstrap/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/angular-ui/bootstrap/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text" class="js-site-search-focus js-site-search-field is-clearable chromeless-input" data-hotkey="s" name="q" placeholder="Search" aria-label="Search this repository" data-global-scope-placeholder="Search GitHub" data-repo-scope-placeholder="Search" tabindex="1" autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://github.com/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://github.com/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://github.com/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope="" itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container="">  
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="https://github.com/login?return_to=%2Fangular-ui%2Fbootstrap" class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="https://github.com/angular-ui/bootstrap/watchers">
    767
  </a>

  </li>

  <li>
      <a href="https://github.com/login?return_to=%2Fangular-ui%2Fbootstrap" class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="https://github.com/angular-ui/bootstrap/stargazers">
      10,928
    </a>

  </li>

  <li>
      <a href="https://github.com/login?return_to=%2Fangular-ui%2Fbootstrap" class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="https://github.com/angular-ui/bootstrap/network" class="social-count">
      5,663
    </a>
  </li>
</ul>

    <h1 itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo"></span>
  <span class="author"><a href="https://github.com/angular-ui" class="url fn" itemprop="url" rel="author"><span itemprop="title">angular-ui</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="https://github.com/angular-ui/bootstrap" data-pjax="#js-repo-pjax-container">bootstrap</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="./bootstrap_progressbar_files/octocat-spinner-32.gif" width="16">
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-pjax="#js-repo-pjax-container" data-issue-count-url="/angular-ui/bootstrap/issues/counts">

  <a href="https://github.com/angular-ui/bootstrap" aria-label="Code" aria-selected="true" class="js-selected-navigation-item reponav-item selected" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /angular-ui/bootstrap">
    <span class="octicon octicon-code"></span>
    Code
</a>
    <a href="https://github.com/angular-ui/bootstrap/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /angular-ui/bootstrap/issues">
      <span class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">77</span>

</a>
  <a href="https://github.com/angular-ui/bootstrap/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /angular-ui/bootstrap/pulls">
    <span class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">27</span>

</a>
    <a href="https://github.com/angular-ui/bootstrap/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /angular-ui/bootstrap/wiki">
      <span class="octicon octicon-book"></span>
      Wiki
</a>
  <a href="https://github.com/angular-ui/bootstrap/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /angular-ui/bootstrap/pulse">
    <span class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="https://github.com/angular-ui/bootstrap/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /angular-ui/bootstrap/graphs">
    <span class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container repo-container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="https://github.com/angular-ui/bootstrap/blob/66d290225adda42d0550d9f10ff9f588cb721e28/src/progressbar/progressbar.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:c2347ee6e14aa6018f5b3f85c11a5b79 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w" title="master" type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax="" aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="https://github.com/angular-ui/bootstrap/blob/master/src/progressbar/progressbar.js#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="https://github.com/angular-ui/bootstrap/blob/master/src/progressbar/progressbar.js#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular-ui/bootstrap/blob/0.14.x/src/progressbar/progressbar.js" data-name="0.14.x" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="0.14.x">
                0.14.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular-ui/bootstrap/blob/gh-pages/src/progressbar/progressbar.js" data-name="gh-pages" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected" href="./bootstrap_progressbar_files/bootstrap_progressbar.js" data-name="master" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular-ui/bootstrap/blob/popover-clickoff/src/progressbar/progressbar.js" data-name="popover-clickoff" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="popover-clickoff">
                popover-clickoff
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.14.3/src/progressbar/progressbar.js" data-name="0.14.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.14.3">0.14.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.14.2/src/progressbar/progressbar.js" data-name="0.14.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.14.2">0.14.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.14.1/src/progressbar/progressbar.js" data-name="0.14.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.14.1">0.14.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.14.0/src/progressbar/progressbar.js" data-name="0.14.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.14.0">0.14.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.13.4/src/progressbar/progressbar.js" data-name="0.13.4" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.13.4">0.13.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.13.3/src/progressbar/progressbar.js" data-name="0.13.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.13.3">0.13.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.13.2/src/progressbar/progressbar.js" data-name="0.13.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.13.2">0.13.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.13.1/src/progressbar/progressbar.js" data-name="0.13.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.13.1">0.13.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.13.0/src/progressbar/progressbar.js" data-name="0.13.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.13.0">0.13.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.12.1/src/progressbar/progressbar.js" data-name="0.12.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.12.1">0.12.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.12.0/src/progressbar/progressbar.js" data-name="0.12.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.12.0">0.12.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.11.2/src/progressbar/progressbar.js" data-name="0.11.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.11.2">0.11.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.11.1/src/progressbar/progressbar.js" data-name="0.11.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.11.1">0.11.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.11.0/src/progressbar/progressbar.js" data-name="0.11.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.11.0">0.11.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.10.0/src/progressbar/progressbar.js" data-name="0.10.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.10.0">0.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.9.0/src/progressbar/progressbar.js" data-name="0.9.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.9.0">0.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.8.0/src/progressbar/progressbar.js" data-name="0.8.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.8.0">0.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.7.0/src/progressbar/progressbar.js" data-name="0.7.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.7.0">0.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.6.0/src/progressbar/progressbar.js" data-name="0.6.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.6.0">0.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.5.0/src/progressbar/progressbar.js" data-name="0.5.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.5.0">0.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.4.0/src/progressbar/progressbar.js" data-name="0.4.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.4.0">0.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.3.0/src/progressbar/progressbar.js" data-name="0.3.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.3.0">0.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.2.0/src/progressbar/progressbar.js" data-name="0.2.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.2.0">0.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular-ui/bootstrap/tree/0.1.0/src/progressbar/progressbar.js" data-name="0.1.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="0.1.0">0.1.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="https://github.com/angular-ui/bootstrap/find/master" class="js-show-file-finder btn btn-sm" data-pjax="" data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/angular-ui/bootstrap" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/angular-ui/bootstrap/tree/master/src" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/angular-ui/bootstrap/tree/master/src/progressbar" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">progressbar</span></a></span><span class="separator">/</span><strong class="final-path">progressbar.js</strong>
    </div>
  </div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="https://github.com/angular-ui/bootstrap/commit/342c576ea44e85f8406688109cdea12844341c3f" data-pjax="">
          342c576
        </a>
        <time datetime="2015-11-07T20:49:59Z" is="relative-time" title="Nov 7, 2015, 8:49 PM GMT">26 days ago</time>
      </span>
      <div>
        <img alt="@wesleycho" class="avatar" height="20" src="./bootstrap_progressbar_files/1703387" width="20">
        <a href="https://github.com/wesleycho" class="user-mention" rel="contributor">wesleycho</a>
          <a href="https://github.com/angular-ui/bootstrap/commit/342c576ea44e85f8406688109cdea12844341c3f" class="message" data-pjax="true" title="feat: prefix virtual templates with `uib/`

- Change all virtual paths with built in templates to be prefixed by `uib/`

BREAKING CHANGE: All virtual templates in UI Bootstrap now are prefixed
with `uib/` - if one is overriding the templates via `$templateCache` path
or manually building the templates from the UI Bootstrap repository, one
needs to change the string used in the `$templateCache` representation
to have the new prefix

Closes #1205
Closes #4839">feat: prefix virtual templates with `uib/`</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="https://github.com/angular-ui/bootstrap/blob/master/src/progressbar/progressbar.js#blob_contributors_box" rel="facebox">
        <strong>8</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="wesleycho" href="https://github.com/angular-ui/bootstrap/commits/master/src/progressbar/progressbar.js?author=wesleycho"><img alt="@wesleycho" class="avatar" height="20" src="./bootstrap_progressbar_files/1703387" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="bekos" href="https://github.com/angular-ui/bootstrap/commits/master/src/progressbar/progressbar.js?author=bekos"><img alt="@bekos" class="avatar" height="20" src="./bootstrap_progressbar_files/551595" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Foxandxss" href="https://github.com/angular-ui/bootstrap/commits/master/src/progressbar/progressbar.js?author=Foxandxss"><img alt="@Foxandxss" class="avatar" height="20" src="./bootstrap_progressbar_files/1087957" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tjgrathwell" href="https://github.com/angular-ui/bootstrap/commits/master/src/progressbar/progressbar.js?author=tjgrathwell"><img alt="@tjgrathwell" class="avatar" height="20" src="./bootstrap_progressbar_files/1041691" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="RaananW" href="https://github.com/angular-ui/bootstrap/commits/master/src/progressbar/progressbar.js?author=RaananW"><img alt="@RaananW" class="avatar" height="20" src="./bootstrap_progressbar_files/1381702" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="JDeuker" href="https://github.com/angular-ui/bootstrap/commits/master/src/progressbar/progressbar.js?author=JDeuker"><img alt="@JDeuker" class="avatar" height="20" src="./bootstrap_progressbar_files/14803733" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="groupsky" href="https://github.com/angular-ui/bootstrap/commits/master/src/progressbar/progressbar.js?author=groupsky"><img alt="@groupsky" class="avatar" height="20" src="./bootstrap_progressbar_files/185580" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="SteffanLong" href="https://github.com/angular-ui/bootstrap/commits/master/src/progressbar/progressbar.js?author=SteffanLong"><img alt="@SteffanLong" class="avatar" height="20" src="./bootstrap_progressbar_files/5157291" width="20"> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@wesleycho" height="24" src="./bootstrap_progressbar_files/1703387(1)" width="24">
            <a href="https://github.com/wesleycho">wesleycho</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bekos" height="24" src="./bootstrap_progressbar_files/551595(1)" width="24">
            <a href="https://github.com/bekos">bekos</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Foxandxss" height="24" src="./bootstrap_progressbar_files/1087957(1)" width="24">
            <a href="https://github.com/Foxandxss">Foxandxss</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tjgrathwell" height="24" src="./bootstrap_progressbar_files/1041691(1)" width="24">
            <a href="https://github.com/tjgrathwell">tjgrathwell</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@RaananW" height="24" src="./bootstrap_progressbar_files/1381702(1)" width="24">
            <a href="https://github.com/RaananW">RaananW</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@JDeuker" height="24" src="./bootstrap_progressbar_files/14803733(1)" width="24">
            <a href="https://github.com/JDeuker">JDeuker</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@groupsky" height="24" src="./bootstrap_progressbar_files/185580(1)" width="24">
            <a href="https://github.com/groupsky">groupsky</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@SteffanLong" height="24" src="./bootstrap_progressbar_files/5157291(1)" width="24">
            <a href="https://github.com/SteffanLong">SteffanLong</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="https://github.com/angular-ui/bootstrap/raw/master/src/progressbar/progressbar.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="https://github.com/angular-ui/bootstrap/blame/master/src/progressbar/progressbar.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="https://github.com/angular-ui/bootstrap/commits/master/src/progressbar/progressbar.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw" href="https://windows.github.com/" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      106 lines (90 sloc)
      <span class="file-info-divider"></span>
    2.55 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="2">
      <tbody><tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">'</span>ui.bootstrap.progressbar<span class="pl-pds">'</span></span>, [])</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">.<span class="pl-en">constant</span>(<span class="pl-s"><span class="pl-pds">'</span>uibProgressConfig<span class="pl-pds">'</span></span>, {</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">  animate<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">  max<span class="pl-k">:</span> <span class="pl-c1">100</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">})</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">.<span class="pl-en">controller</span>(<span class="pl-s"><span class="pl-pds">'</span>UibProgressController<span class="pl-pds">'</span></span>, [<span class="pl-s"><span class="pl-pds">'</span>$scope<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>$attrs<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>uibProgressConfig<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$scope</span>, <span class="pl-smi">$attrs</span>, <span class="pl-smi">progressConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">      animate <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>($<span class="pl-smi">attrs</span>.<span class="pl-smi">animate</span>) <span class="pl-k">?</span> $<span class="pl-smi">scope</span>.$<span class="pl-smi">parent</span>.$<span class="pl-c1">eval</span>($<span class="pl-smi">attrs</span>.<span class="pl-smi">animate</span>) <span class="pl-k">:</span> <span class="pl-smi">progressConfig</span>.<span class="pl-smi">animate</span>;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">this</span>.<span class="pl-smi">bars</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  $<span class="pl-smi">scope</span>.<span class="pl-smi">max</span> <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>($<span class="pl-smi">scope</span>.<span class="pl-smi">max</span>) <span class="pl-k">?</span> $<span class="pl-smi">scope</span>.<span class="pl-smi">max</span> <span class="pl-k">:</span> <span class="pl-smi">progressConfig</span>.<span class="pl-smi">max</span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">addBar</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">bar</span>, <span class="pl-smi">element</span>, <span class="pl-smi">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>animate) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">element</span>.<span class="pl-en">css</span>({<span class="pl-s"><span class="pl-pds">'</span>transition<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>none<span class="pl-pds">'</span></span>});</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.<span class="pl-smi">bars</span>.<span class="pl-c1">push</span>(bar);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">bar</span>.<span class="pl-smi">max</span> <span class="pl-k">=</span> $<span class="pl-smi">scope</span>.<span class="pl-smi">max</span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">bar</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> attrs <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(<span class="pl-smi">attrs</span>.<span class="pl-c1">title</span>) <span class="pl-k">?</span> <span class="pl-smi">attrs</span>.<span class="pl-c1">title</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>progressbar<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">bar</span>.$<span class="pl-c1">watch</span>(<span class="pl-s"><span class="pl-pds">'</span>value<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">bar</span>.<span class="pl-en">recalculatePercentage</span>();</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">bar</span>.<span class="pl-en">recalculatePercentage</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> totalPercentage <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-smi">bars</span>.<span class="pl-en">reduce</span>(<span class="pl-k">function</span>(<span class="pl-smi">total</span>, <span class="pl-smi">bar</span>) {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">bar</span>.<span class="pl-smi">percent</span> <span class="pl-k">=</span> <span class="pl-k">+</span>(<span class="pl-c1">100</span> <span class="pl-k">*</span> <span class="pl-smi">bar</span>.<span class="pl-c1">value</span> <span class="pl-k">/</span> <span class="pl-smi">bar</span>.<span class="pl-smi">max</span>).<span class="pl-en">toFixed</span>(<span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> total <span class="pl-k">+</span> <span class="pl-smi">bar</span>.<span class="pl-smi">percent</span>;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">      }, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (totalPercentage <span class="pl-k">&gt;</span> <span class="pl-c1">100</span>) {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">bar</span>.<span class="pl-smi">percent</span> <span class="pl-k">-=</span> totalPercentage <span class="pl-k">-</span> <span class="pl-c1">100</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">bar</span>.$<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>$destroy<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">      element <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">self</span>.<span class="pl-en">removeBar</span>(bar);</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">removeBar</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">bar</span>) {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.<span class="pl-smi">bars</span>.<span class="pl-c1">splice</span>(<span class="pl-smi">this</span>.<span class="pl-smi">bars</span>.<span class="pl-c1">indexOf</span>(bar), <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.<span class="pl-smi">bars</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span> (<span class="pl-smi">bar</span>) {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">bar</span>.<span class="pl-en">recalculatePercentage</span>();</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">  $<span class="pl-smi">scope</span>.$<span class="pl-c1">watch</span>(<span class="pl-s"><span class="pl-pds">'</span>max<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">max</span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">self</span>.<span class="pl-smi">bars</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">bar</span>) {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">bar</span>.<span class="pl-smi">max</span> <span class="pl-k">=</span> $<span class="pl-smi">scope</span>.<span class="pl-smi">max</span>;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">bar</span>.<span class="pl-en">recalculatePercentage</span>();</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">.<span class="pl-en">directive</span>(<span class="pl-s"><span class="pl-pds">'</span>uibProgress<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    replace<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    transclude<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">    controller<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>UibProgressController<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">    require<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>uibProgress<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">    scope<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">      max<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>=?<span class="pl-pds">'</span></span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    templateUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>uib/template/progressbar/progress.html<span class="pl-pds">'</span></span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">})</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">.<span class="pl-en">directive</span>(<span class="pl-s"><span class="pl-pds">'</span>uibBar<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">    replace<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    transclude<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    require<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>^uibProgress<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    scope<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">      value<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>=<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">      type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>@<span class="pl-pds">'</span></span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    templateUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>uib/template/progressbar/bar.html<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">link</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">scope</span>, <span class="pl-smi">element</span>, <span class="pl-smi">attrs</span>, <span class="pl-smi">progressCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">progressCtrl</span>.<span class="pl-en">addBar</span>(scope, element, attrs);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">})</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">.<span class="pl-en">directive</span>(<span class="pl-s"><span class="pl-pds">'</span>uibProgressbar<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">    replace<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    transclude<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    controller<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>UibProgressController<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">    scope<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">      value<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>=<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">      max<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>=?<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">      type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>@<span class="pl-pds">'</span></span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">    templateUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>uib/template/progressbar/progressbar.html<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">link</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">scope</span>, <span class="pl-smi">element</span>, <span class="pl-smi">attrs</span>, <span class="pl-smi">progressCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">progressCtrl</span>.<span class="pl-en">addBar</span>(scope, <span class="pl-smi">angular</span>.<span class="pl-en">element</span>(<span class="pl-smi">element</span>.<span class="pl-en">children</span>()[<span class="pl-c1">0</span>]), {title<span class="pl-k">:</span> <span class="pl-smi">attrs</span>.<span class="pl-c1">title</span>});</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
</tbody></table>

  </div>

</div>

<a href="https://github.com/angular-ui/bootstrap/blob/master/src/progressbar/progressbar.js#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line…" aria-label="Jump to line" autofocus="">
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>




</div>
  </div>

    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com/" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com/" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com/" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>© 2015 <span title="0.06550s from github-fe145-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com/" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-2uOgpkKLtzR7rEluQaaNku1QFmG3H7ZZfT1ckC5roeE=" src="./bootstrap_progressbar_files/frameworks-dae3a0a6428bb7347bac496e41a68d92ed501661b71fb6597d3d5c902e6ba1e1.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-vKiwo0BfvrFVEBcuU6dEj7X30Qc6vcNVxjanSPokVjE=" src="./bootstrap_progressbar_files/github-bca8b0a3405fbeb15510172e53a7448fb5f7d1073abdc355c636a748fa245631.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  


    <div class="facebox" id="facebox" style="display:none;">       <div class="facebox-popup">         <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">         </div>         <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">           <span class="octicon octicon-remove-close"></span>         </button>       </div>     </div></body></html>