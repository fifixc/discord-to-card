<div align="center">

<img src="https://raw.githubusercontent.com/lovverhub/lovver-assets/master/assets/logos/lovver-3d.webp" width="200" alt="Logo"/><br/>

# [discord-to-card][npm-link]

Generate a banner card with Discord user information.<br/>

[Installation](#-installation) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

<p align="center">
  <img src="https://raw.githubusercontent.com/lovverhub/lovver-assets/master/assets/palette/royale-blade/separator.webp" width="400" />
</p>

[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-license-shield]][github-license-link]<br>

</div>

## 📦 Installation

To install <b>discord-to-card</b>, run the following command:

```bash
$ pnpm install discord-to-card
```

## 🔍 Usage

```js
import { getProfile } from 'discord-to-card'
const data = await getProfile('YOUR_DISCORD_TOKEN')

fs.writeFileSync('banner.webp', data)
```

## 🖼 Preview
<img src="https://i.ibb.co/wSSD1tg/Discord-Banner-Image.png" />

[github-stars-shield]: https://img.shields.io/github/stars/aranda10ss/discord-to-card?colorA=363a4f&colorB=f5a97f&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0id2hpdGUiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDU3NiA1MTIiIGhlaWdodD0iMjAwcHgiIHdpZHRoPSIyMDBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzE2LjkgMThDMzExLjYgNyAzMDAuNCAwIDI4OC4xIDBzLTIzLjQgNy0yOC44IDE4TDE5NSAxNTAuMyA1MS40IDE3MS41Yy0xMiAxLjgtMjIgMTAuMi0yNS43IDIxLjdzLS43IDI0LjIgNy45IDMyLjdMMTM3LjggMzI5IDExMy4yIDQ3NC43Yy0yIDEyIDMgMjQuMiAxMi45IDMxLjNzMjMgOCAzMy44IDIuM2wxMjguMy02OC41IDEyOC4zIDY4LjVjMTAuOCA1LjcgMjMuOSA0LjkgMzMuOC0yLjNzMTQuOS0xOS4zIDEyLjktMzEuM0w0MzguNSAzMjkgNTQyLjcgMjI1LjljOC42LTguNSAxMS43LTIxLjIgNy45LTMyLjdzLTEzLjctMTkuOS0yNS43LTIxLjdMMzgxLjIgMTUwLjMgMzE2LjkgMTh6Ij48L3BhdGg+PC9zdmc+
[github-stars-link]: https://github.com/aranda10ss/discord-to-card/network/stargazers
[github-issues-link]: https://github.com/aranda10ss/discord-to-card/issues
[github-issues-shield]: https://img.shields.io/github/issues/aranda10ss/discord-to-card?colorA=363a4f&colorB=E59BE9&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0id2hpdGUiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDFjNi4wNzUgMCAxMSA0LjkyNSAxMSAxMXMtNC45MjUgMTEtMTEgMTFTMSAxOC4wNzUgMSAxMiA1LjkyNSAxIDEyIDFaTTIuNSAxMmE5LjUgOS41IDAgMCAwIDkuNSA5LjUgOS41IDkuNSAwIDAgMCA5LjUtOS41QTkuNSA5LjUgMCAwIDAgMTIgMi41IDkuNSA5LjUgMCAwIDAgMi41IDEyWm05LjUgMmEyIDIgMCAxIDEtLjAwMS0zLjk5OUEyIDIgMCAwIDEgMTIgMTRaIj48L3BhdGg+PC9zdmc+
[github-contributors-link]: https://github.com/aranda10ss/discord-to-card/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/aranda10ss/discord-to-card?colorA=363a4f&colorB=98D8AA&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0id2hpdGUiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGhlaWdodD0iMjAwcHgiIHdpZHRoPSIyMDBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzA1LjggMi4xQzMxNC40IDUuOSAzMjAgMTQuNSAzMjAgMjRWNjRoMTZjNzAuNyAwIDEyOCA1Ny4zIDEyOCAxMjhWMzU4LjdjMjguMyAxMi4zIDQ4IDQwLjUgNDggNzMuM2MwIDQ0LjItMzUuOCA4MC04MCA4MHMtODAtMzUuOC04MC04MGMwLTMyLjggMTkuNy02MSA0OC03My4zVjE5MmMwLTM1LjMtMjguNy02NC02NC02NEgzMjB2NDBjMCA5LjUtNS42IDE4LjEtMTQuMiAyMS45cy0xOC44IDIuMy0yNS44LTQuMWwtODAtNzJjLTUuMS00LjYtNy45LTExLTcuOS0xNy44czIuOS0xMy4zIDcuOS0xNy44bDgwLTcyYzctNi4zIDE3LjItNy45IDI1LjgtNC4xek0xMDQgODBBMjQgMjQgMCAxIDAgNTYgODBhMjQgMjQgMCAxIDAgNDggMHptOCA3My4zVjM1OC43YzI4LjMgMTIuMyA0OCA0MC41IDQ4IDczLjNjMCA0NC4yLTM1LjggODAtODAgODBzLTgwLTM1LjgtODAtODBjMC0zMi44IDE5LjctNjEgNDgtNzMuM1YxNTMuM0MxOS43IDE0MSAwIDExMi44IDAgODBDMCAzNS44IDM1LjggMCA4MCAwczgwIDM1LjggODAgODBjMCAzMi44LTE5LjcgNjEtNDggNzMuM3pNMTA0IDQzMmEyNCAyNCAwIDEgMCAtNDggMCAyNCAyNCAwIDEgMCA0OCAwem0zMjggMjRhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4eiI+PC9wYXRoPjwvc3ZnPg==
[github-forks-link]: https://github.com/aranda10ss/discord-to-card/network/members
[github-forks-shield]: https://img.shields.io/github/forks/aranda10ss/discord-to-card?colorA=363a4f&colorB=F5C6EC&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0id2hpdGUiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDQ0OCA1MTIiIGhlaWdodD0iMjAwcHgiIHdpZHRoPSIyMDBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNODAgMTA0YTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHptODAtMjRjMCAzMi44LTE5LjcgNjEtNDggNzMuM1YxOTJjMCAxNy43IDE0LjMgMzIgMzIgMzJIMzA0YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE1My4zQzMwNy43IDE0MSAyODggMTEyLjggMjg4IDgwYzAtNDQuMiAzNS44LTgwIDgwLTgwczgwIDM1LjggODAgODBjMCAzMi44LTE5LjcgNjEtNDggNzMuM1YxOTJjMCA1My00MyA5Ni05NiA5NkgyNTZ2NzAuN2MyOC4zIDEyLjMgNDggNDAuNSA0OCA3My4zYzAgNDQuMi0zNS44IDgwLTgwIDgwcy04MC0zNS44LTgwLTgwYzAtMzIuOCAxOS43LTYxIDQ4LTczLjNWMjg4SDE0NGMtNTMgMC05Ni00My05Ni05NlYxNTMuM0MxOS43IDE0MSAwIDExMi44IDAgODBDMCAzNS44IDM1LjggMCA4MCAwczgwIDM1LjggODAgODB6bTIwOCAyNGEyNCAyNCAwIDEgMCAwLTQ4IDI0IDI0IDAgMSAwIDAgNDh6TTI0OCA0MzJhMjQgMjQgMCAxIDAgLTQ4IDAgMjQgMjQgMCAxIDAgNDggMHoiPjwvcGF0aD48L3N2Zz4=
[github-license-link]: https://github.com/aranda10ss/discord-to-card/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/aranda10ss/discord-to-card?colorA=363a4f&colorB=A3D8FF&style=for-the-badge
[npm-link]: https://www.npmjs.com/package/discord-to-card