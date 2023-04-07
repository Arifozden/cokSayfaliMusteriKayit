package oslomet.musteriikisayfa;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MusteriController {

    private final List<Musteri> tumMusteriler=new ArrayList<>();

    @GetMapping("/kayit")
    public void kayit(Musteri musteriGir){
        tumMusteriler.add(musteriGir);
    }

@GetMapping("/hepsiniGetir")
    public List<Musteri> hepsiniGetir(){
        return tumMusteriler;
    }

    @GetMapping("/hepsiniSil")
    public void hepsiniSil(){
        tumMusteriler.clear();
    }
}
