
package com.adhi.campusgate.service;

import java.util.List;

import com.adhi.campusgate.dto.request.SiteRequest;
import com.adhi.campusgate.dto.response.SiteResponse;

public interface WebService {

    List<SiteResponse> getSiteData();

    String addSiteData(SiteRequest siteRequest);

    SiteResponse updateSiteData(SiteRequest siteRequest, Long id);

}