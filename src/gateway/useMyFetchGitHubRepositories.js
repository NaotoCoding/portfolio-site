import axios from 'axios'

const useFetchMyGitHubRepositories = async () => {
  const response = await axios
    .get('https://api.github.com/users/NaotoCoding/repos', {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}` }
    })
    .catch((e) => {
      // TODO: エラーハンドリング
      console.error(e)
    })
  return response.data
}

export default useFetchMyGitHubRepositories
