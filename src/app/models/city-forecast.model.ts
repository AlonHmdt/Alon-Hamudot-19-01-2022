export class CityForecast {
  Headline: { Text: string };
  DailyForecasts: DailyCityForecast[];
}

class DailyCityForecast {
  Date: string;
  Temperature: { Maximum: {Value: string} , Minimum: {Value: string}};
}


