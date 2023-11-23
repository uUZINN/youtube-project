#  나만의 패션 유튜브 사이트 만들기
<<<<<<< HEAD
유튜브 API를 이용해서 패션룩북 사이트를 만들겠습니다.
평소에 즐겨보는 패션관련 유튜브 영상

[image](https://uuzinn.github.io/youtube-project/src/assets/img/dddd-min.png)

=======
유튜브 API를 이용하여 평소에 즐겨보는 패션관련 유튜브 영상들을 모아볼 수 있는 사이트를 제작하였습니다.
[!image](https://uuzinn.github.io/youtube-project/src/assets/img/dddd-min.png)
>>>>>>> ec815cb9504657ab8246b55a88e0a5fe3f1709d7
## 설치
sass를 설치<br>
react-router-dom 설치<br>
react-icons 설치<br>
`npm install react-router-dom axios react-icon react-player sas
s react-helmet-async swiper`

### postman
https://www.postman.com/downloads/
Postman은 API를 만들고 테스트하는 데 사용되는 도구입니다. HTTP 요청을 생성하여 서버에 보내고, 응답을 확인하거나 테스트할 수 있습니다. 개발자들은 이를 통해 API가 올바르게 작동하는지 확인하고 문제를 해결하거나 수정할 수 있습니다. 요청과 응답을 시각적으로 확인하고, 테스트를 자동화하여 개발 작업을 더 효율적으로 수행할 수 있습니다.

### Youtube API
https://developers.google.com/youtube/v3
<br><br>
YoutubeAPI-Key 가져오기
<br><br>
YouTube API는 YouTube 플랫폼에서 제공하는 서비스를 개발자들이 활용할 수 있도록 하는 인터페이스입니다. 이 API를 사용하면 YouTube의 다양한 기능과 데이터에 접근하여 사용할 수 있습니다.

### Rapid API
https://rapidapi.com/Glavier/api/youtube-v311
<br><br>
RapidAPI-Key 가져오기
<br><br>
RapidAPI는 다양한 API를 사용할 수 있도록 통합된 플랫폼입니다. 이 플랫폼을 통해 수많은 API를 한 곳에서 찾고 사용할 수 있습니다. 이 API들은 여러 분야에 걸쳐 다양한 기능을 제공하며, 개발자들은 RapidAPI를 통해 API를 검색하고, 테스트하고, 구독하며, 관리할 수 있습니다.
<br><br>
RapidAPI는 사용자들에게 API를 쉽게 사용할 수 있는 다양한 기능을 제공합니다. 사용자들은 다양한 API를 탐색하고 필요한 API를 찾아보거나, API 문서를 확인하고 신뢰할 수 있는 API를 선택할 수 있습니다. 또한 특정 API에 대한 요금제나 사용량을 관리하고 감시할 수 있습니다.
<br><br>
이 플랫폼을 통해 사용자들은 다양한 업체 및 제공자의 API를 한 곳에서 쉽게 관리하고 활용할 수 있으며, 개발 프로젝트나 애플리케이션에 필요한 다양한 API를 탐색하고 통합할 수 있습니다. RapidAPI는 개발자 커뮤니티에서 널리 사용되며, API 사용을 보다 편리하게 만들어주는 유용한 플랫폼 중 하나입니다.

### Search기능
검색어를 기반으로 YouTube API를 통해 비디오를 검색하고, 검색 결과를 페이지에 표시하는 React 컴포넌트입니다. 
<br><br>
1. Search 컴포넌트: URL에서 검색어를 받아옵니다(useParams). 이후 해당 검색어를 기반으로 fetchVideos 함수를 호출하고, 검색 결과를 상태로 관리합니다.
<br><br>
2. useEffect: 검색어가 변경될 때마다 실행되며, 새로운 검색어로 비디오를 검색합니다. 검색어가 바뀔 때마다 fetchVideos를 호출하여 새로운 검색 결과를 가져옵니다.<br><br>
3. fetchVideos: YouTube API에 요청을 보내 검색 결과를 받아옵니다. fetchFromAPI 유틸리티 함수를 사용하여 API로 요청을 보냅니다. 받아온 데이터는 검색된 비디오들과 다음 페이지를 위한 토큰으로 이루어져 있습니다. 이전에 가져온 비디오들과 새로 가져온 비디오들을 합쳐 상태로 관리하고, 다음 페이지 토큰을 설정하여 더 많은 결과를 가져올 수 있도록 합니다.<br>
<br>
4. handleLoadMore: 더 많은 비디오를 불러오기 위한 함수입니다. 다음 페이지 토큰이 있을 경우에만 더 많은 결과를 가져오도록 처리되어 있습니다.<br><br>
5. VideoSearch 컴포넌트: videos 상태를 받아와서 각 비디오를 표시하는 부분을 담당합니다.
<br><br>
이 코드는 검색 결과를 계속해서 추가로 불러와서 보여주는데, 사용자가 '더 보기' 버튼을 클릭하면 다음 페이지의 비디오를 가져와 화면에 추가합니다.

### .env
.env 파일은 주로 환경 변수를 저장하는데 사용되는 파일 형식입니다. 주로 프로젝트에서 사용되는 중요한 설정값들을 저장하고 보관하기 위해 사용됩니다.
<br><br>
1. 환경 변수 저장: 주로 API 키, 데이터베이스 연결 정보, 비밀 토큰 등과 같은 민감한 정보나 환경 변수들을 안전하게 저장하기 위해 사용됩니다.
<br><br>
2. 보안과 개인 정보 보호: .env 파일을 사용하면 개인 정보나 민감한 데이터를 소스 코드에 하드코딩하는 것을 피할 수 있으며, 이를 외부에 노출시키지 않고 안전하게 관리할 수 있습니다.
<br><br>
3. 프로젝트 설정 관리: 프로젝트의 설정값을 효과적으로 관리하고, 다른 환경(개발, 테스트, 프로덕션 등)에서 서로 다른 설정값을 가질 수 있도록 도와줍니다.
<br><br>
.env 파일은 보통 프로젝트 루트 디렉토리에 위치하며, 환경 변수들은 KEY=VALUE 형식으로 저장됩니다. 이 파일은 보안을 위해 .gitignore와 같은 방법으로 깃(Git) 등 버전 관리 시스템에서 제외시켜야 합니다. 이렇게 하면 중요한 정보가 버전 관리 시스템에 올라가거나 공개되는 것을 방지할 수 있습니다.
<br><br>
보통 JavaScript나 Node.js 프로젝트에서는 dotenv 라이브러리를 사용하여 .env 파일에서 환경 변수를 로드하고, 프로젝트에서 사용합니다. 이를 통해 .env 파일에 정의된 환경 변수들을 손쉽게 사용할 수 있습니다.
