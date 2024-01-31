package Pokemon;

public class EntityNotFoundException extends RuntimeException{
    public EntityNotFoundException(Throwable err) {
        super(err);
    }
}
