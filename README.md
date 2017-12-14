# slate-screenshots

## Adding a new site

- Create a directory named for the hostname of the site to capture
- Copy `capture.js` from another existing site directory into the new directory
- Update the root host URL on the first line
- Update pages list as needed

## Capturing/updating a site

- Change into a site directory: `cd slate-develop`
- Visit the host and copy your session handle: [http://slate-develop.dev01.slatepowered.net/login?format=json](http://slate-develop.dev01.slatepowered.net/login?format=json)
- Execute `node capture.js YOUR_SESSION_HANDLE`
- Review changes identified by git
- Commit and push new/changed screenshots to accept as new baseline

## See Also

[https://github.com/JarvusInnovations/website-snapshotter](https://github.com/JarvusInnovations/website-snapshotter)