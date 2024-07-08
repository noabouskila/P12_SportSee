import  UseUserApi  from '../services/UserApi';
import  UseUserMockApi  from '../data/mocks/UserMockApi';
import  UsePerformanceApi  from '../services/PerformanceApi';
import  UsePerformanceMockApi  from '../data/mocks/PerformanceMockApi';
import  UseAverageSessionApi  from '../services/AverageSessionApi';
import  UseAverageSessionMockApi  from '../data/mocks/AverageSessionMockApi';
import  UseActivityApi  from '../services/ActivityApi'
import  UseActivityMockApi  from '../data/mocks/ActivityMockApi';


function UseModeProdDevApi(apiType) {
    const isProd = import.meta.env.VITE_IS_PROD === 'true';
  
    switch (apiType) {
      case 'user':
        return isProd ? UseUserApi : UseUserMockApi;
      case 'performance':
        return isProd ? UsePerformanceApi : UsePerformanceMockApi;
      case 'averageSession':
        return isProd ? UseAverageSessionApi : UseAverageSessionMockApi;
      case 'activity':
        return isProd ? UseActivityApi : UseActivityMockApi;
      default:
        throw new Error(`Unknown API type: ${apiType}`);
    }
}
  
export default UseModeProdDevApi;
  