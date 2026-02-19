const redirects = async () => {
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header',
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }

  const shopRedirect = {
    destination: '/programmes',
    permanent: true,
    source: '/shop',
  }

  const productsRedirect = {
    destination: '/programmes/:slug',
    permanent: true,
    source: '/products/:slug',
  }

  const redirects = [internetExplorerRedirect, shopRedirect, productsRedirect]

  return redirects
}

export default redirects
