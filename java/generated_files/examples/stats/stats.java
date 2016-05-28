require 'sendgrid-ruby'


sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])

##################################################
# Retrieve global email statistics #
# GET /stats #

public class Example {
  public static void main(String[] args) throws IOException {
    SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
    Request request = new Request();
    try {
      SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
      Request request = new Request();
      request.method = Method.GET;
      request.endpoint = "stats/";
      Map<String,String> queryParams = new HashMap<String, String>();
      queryParams.put("aggregated_by", "day");
    queryParams.put("limit", "1");
    queryParams.put("start_date", "2016-01-01");
    queryParams.put("end_date", "2016-04-01");
    queryParams.put("offset", "1");
      request.queryParams = queryParams;
      Response response = sg.api(request);
      System.out.println(response.statusCode);
      System.out.println(response.responseBody);
      System.out.println(response.responseHeaders);
    } catch (IOException ex) {
      throw ex;
    }
  }
}
