//https://api.github.com/users/josebanega26/repos?type=owners&sort=updated
const listRepo = async (user) => {
  let repo = null;
  try {
    const reposData = await fetch(
      `https://api.github.com/users/${user}/repos?type=owners&sort=updated`
    );
    repo = await reposData.json();
  } catch (err) {
    console.error(err);
  }
  console.log('repo', { repo });
  const mockUp = repo
    .map(
      (repo) => `<li><a href='${repo.html_url}'> ${repo.name} ⭐ </a>
</li>`
    )
    .join('');

  const content = document.getElementById('content');
  content.innerHTML = `<ul> ${mockUp} </ul>`;
};

listRepo('josebanega26');
