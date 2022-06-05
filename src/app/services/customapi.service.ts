import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomapiService {

  constructor(private httpClient: HttpClient) {

   }

   getData() : Promise<any> {
    return this.httpClient.get(
      'https://api.github.com/users/codigofacilito/repos').toPromise();
      // 'https://www.fifa.com/es/tournaments/mens/worldcup/qatar2022/match-center').toPromise();

    //  return this.httpClient.get(
    //    'https://sportscore1.p.rapidapi.com/sports/1/teams?page=1',
    //    {
    //     "headers": {
    //       "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
		//       "X-RapidAPI-Key": "e40aa2932bmsh0f4e6108b8e10c3p1045f9jsn64f5bc10270f"
    //    }
    //   }
    //  ).toPromise();

   }
}
