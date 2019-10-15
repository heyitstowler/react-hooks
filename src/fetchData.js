const pageDataMap = {
  dogs: {
    title: 'Dogs',
    content: 'There are many kinds of dogs. I like dogs. They are great pets.'
  },
  cats: {
    title: 'Cats',
    content: 'Cats are pretty cool. They are usually very independent and sometimes can play hard to get, but when they\'re friendly, they\'re very cute.'
  },
  fish: {
      title: 'Fish',
      content: 'Honestly, fish aren\'t that great. I feel like an important part of being a pet is being able to be pet.'
  }
}
const noData = {
  title: 'No page found :(',
  content: 'Try another link'
}

export const pageList = Object.keys(pageDataMap)

export default function fetchData(path) {
  const pageData = pageDataMap[path] || noData
  return new Promise(resolve => {
    setTimeout(() => resolve(pageData), 500)
  })
}