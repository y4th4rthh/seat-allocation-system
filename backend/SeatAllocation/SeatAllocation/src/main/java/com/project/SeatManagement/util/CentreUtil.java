package com.project.SeatManagement.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.SeatManagement.entity.Center;
import com.project.SeatManagement.entity.District;
import com.project.SeatManagement.repository.CenterRepository;
import com.project.SeatManagement.repository.DistrictRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.util.List;

public class CentreUtil {

    public static void saveDistrictsFromJson(DistrictRepository districtRepository) {
        ObjectMapper mapper = new ObjectMapper();
        ClassPathResource resource = new ClassPathResource("districts.json");
        DistrictData districtData = null;
        try {
            districtData = mapper.readValue(resource.getInputStream(), DistrictData.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        for (String districtName : districtData.getDistricts()) {
            District district = new District();
            district.setDistrictName(districtName);
            districtRepository.save(district);
        }
    }

    @Getter
    @Setter
    private static class DistrictData {
        private List<String> districts;
    }

    public static void addCentersForDistricts(DistrictRepository districtRepository, CenterRepository centerRepository) {
        List<District> districts = districtRepository.findAll();
        for (District district : districts) {
            for (int i = 1; i <= 3; i++) {
                Center center = new Center();
                center.setCenterName( "D" + district.getId() + "C" + i);//D for district & C for centre
                center.setDistrict(district);
                centerRepository.save(center);
            }
        }
    }
}
