#r "eyex/EyeXFramework.dll"
#r "eyex/Tobii.EyeX.Client.Net20.dll"

using EyeXFramework;
using Tobii.EyeX.Framework;
using System;
using System.Threading.Tasks;

public class GazePoint {
 public double X = 1;
 public double Y = 3.1415;
 public double Timestamp = 0.0;

 public GazePoint(double X, double Y, double Timestamp) {
  this.X = X;
  this.Y = Y;
  this.Timestamp = Timestamp;
 }
}

public class Startup
{
    public async Task<object> Invoke(dynamic input)
    {
      var onGazePoint = (Func<object, Task<object>>) input.onGazePoint;
      var eyeXHost = new EyeXHost();
      var stream = eyeXHost.CreateGazePointDataStream(GazePointDataMode.LightlyFiltered);
      await Task.Run(() => eyeXHost.Start());
      stream.Next += async (s, e) => {
        await onGazePoint(new GazePoint(e.X, e.Y, e.Timestamp));
      };
      Console.WriteLine("Listening for gaze data, press any key to exit...");
      //Console.In.Read();
      return stream;
    }
}
